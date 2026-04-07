import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

const EMAIL_USER = process.env.GMAIL_USER || process.env.EMAIL_USER;
const EMAIL_PASS = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_PASS;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const { nome, email, telefone, assunto, mensagem } = body as Record<string, string>;

  if (!nome?.trim() || !email?.trim() || !assunto?.trim() || !mensagem?.trim()) {
    return res.status(400).json({
      success: false,
      message: "Preencha todos os campos obrigatórios.",
    });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "E-mail inválido.",
    });
  }

  const transporter = getTransporter();

  if (!transporter) {
    console.log("[contato] Simulação (credenciais não configuradas):", {
      nome,
      email,
      assunto,
      mensagem: mensagem?.slice(0, 100),
    });
    await new Promise((r) => setTimeout(r, 1000));
    return res.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });
  }

  try {
    const html = `
      <h2>Fale Conosco - Site Montec</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone || "Não informado"}</p>
      <p><strong>Assunto:</strong> ${assunto}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${(mensagem || "").replace(/\n/g, "<br>")}</p>
      <hr><p><em>Enviado em ${new Date().toLocaleString("pt-BR")}</em></p>
    `;
    await transporter.sendMail({
      from: EMAIL_USER,
      to: 'contato@montecmococa.com.br',
      replyTo: email,
      subject: `[Site] Fale Conosco: ${assunto}`,
      html,
    });
    return res.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });
  } catch (err: unknown) {
    console.error("Erro ao enviar contato:", err);
    const msg = err instanceof Error ? err.message : "";
    const isAuthError = /invalid login|authentication failed|username and password|application-specific password/i.test(msg);
    return res.status(500).json({
      success: false,
      message: isAuthError
        ? "Falha no envio: verifique o e-mail e a Senha de app do Gmail (conta com 2 etapas)."
        : "Erro ao enviar mensagem. Tente novamente.",
    });
  }
}
