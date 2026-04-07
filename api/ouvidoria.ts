import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.GMAIL_USER || process.env.EMAIL_USER;
const EMAIL_PASS = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;

function getTransporter() {
  if (!EMAIL_USER || !EMAIL_PASS) return null;
    return nodemailer.createTransport({
      host: "mail.montecmococa.com.br",
      port: 465,
      secure: true,
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });  
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const body = req.body || {};
  const { nome, email, assunto, descricao, isAnonymous } = body as Record<string, unknown>;

  if (!assunto || !String(assunto).trim() || !descricao || !String(descricao).trim()) {
    return res.status(400).json({
      success: false,
      message: "Preencha assunto e descrição.",
    });
  }

  const transporter = getTransporter();

  if (!transporter) {
    console.log("[ouvidoria] Simulação (credenciais não configuradas):", {
      assunto,
      isAnonymous,
      descricao: String(descricao).slice(0, 80),
    });
    await new Promise((r) => setTimeout(r, 1000));
    return res.status(200).json({ success: true, message: "Denúncia enviada com sucesso!" });
  }

  try {
    const html = `
      <h2>OUVIDORIA MONTEC - ${isAnonymous ? "Anônimo" : "Identificado"}</h2>
      <p><strong>Nome:</strong> ${isAnonymous ? "Anônimo" : (nome && String(nome)) || "Não informado"}</p>
      <p><strong>E-mail:</strong> ${isAnonymous ? "Não informado" : (email && String(email)) || "Não informado"}</p>
      <p><strong>Assunto:</strong> ${assunto}</p>
      <p><strong>Descrição:</strong></p>
      <p>${String(descricao).replace(/\n/g, "<br>")}</p>
      <hr><p><em>Enviado em ${new Date().toLocaleString("pt-BR")} via site Montec Mococa</em></p>
    `;
    await transporter.sendMail({
      from: EMAIL_USER,
      to: 'ouvidoria@montecmococa.com.br',
      replyTo: isAnonymous ? undefined : (email as string),
      subject: `[Ouvidoria] ${assunto}`,
      html,
    });
    return res.status(200).json({ success: true, message: "Denúncia enviada com sucesso!" });
  } catch (err: unknown) {
    console.error("Erro ao enviar ouvidoria:", err);
    const msg = err instanceof Error ? err.message : "";
    const isAuthError = /invalid login|authentication failed|username and password|application-specific password/i.test(msg);
    return res.status(500).json({
      success: false,
      message: isAuthError
        ? "Falha no envio: verifique o e-mail e a Senha de app do Gmail (conta com 2 etapas)."
        : "Erro ao enviar denúncia. Tente novamente.",
    });
  }
}
