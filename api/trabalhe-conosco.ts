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

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

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

  const body = req.body as Record<string, unknown> & { curriculo?: { data: string; name?: string } };
  const nome = body?.nome as string | undefined;
  const email = body?.email as string | undefined;
  const telefone = body?.telefone as string | undefined;
  const vaga = body?.vaga as string | undefined;
  const mensagem = body?.mensagem as string | undefined;
  const curriculo = body?.curriculo;

  if (!nome?.trim() || !email?.trim()) {
    return res.status(400).json({
      success: false,
      message: "Preencha nome e e-mail.",
    });
  }

  const transporter = getTransporter();

  if (!transporter) {
    console.log("[trabalhe-conosco] Simulação (credenciais não configuradas):", {
      nome,
      email,
      vaga,
      hasCurriculo: !!curriculo,
    });
    await new Promise((r) => setTimeout(r, 1000));
    return res.status(200).json({ success: true, message: "Currículo enviado com sucesso!" });
  }

  try {
    const attachments: { filename: string; content: Buffer }[] = [];
    if (curriculo?.data) {
      const buf = Buffer.from(curriculo.data, "base64");
      attachments.push({
        filename: (curriculo.name as string) || "curriculo",
        content: buf,
      });
    }

    const html = `
      <h2>Trabalhe Conosco - Currículo recebido</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Telefone:</strong> ${telefone || "Não informado"}</p>
      <p><strong>Vaga de interesse:</strong> ${vaga || "Não informado"}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${(mensagem || "-").replace(/\n/g, "<br>")}</p>
      <hr><p><em>Enviado em ${new Date().toLocaleString("pt-BR")} via site Montec Mococa</em></p>
    `;

    await transporter.sendMail({
      from: EMAIL_USER,
      to: 'vagas@montecmococa.com.br',
      replyTo: email,
      subject: `[Trabalhe Conosco] ${nome} - ${vaga || "Currículo"}`,
      html,
      attachments: attachments.length ? attachments : undefined,
    });
    return res.status(200).json({ success: true, message: "Currículo enviado com sucesso!" });
  } catch (err: unknown) {
    console.error("Erro ao enviar trabalhe conosco:", err);
    const msg = err instanceof Error ? err.message : "";
    const isAuthError = /invalid login|authentication failed|username and password|application-specific password/i.test(msg);
    return res.status(500).json({
      success: false,
      message: isAuthError
        ? "Falha no envio: verifique o e-mail e a Senha de app do Gmail (conta com 2 etapas)."
        : "Erro ao enviar currículo. Tente novamente.",
    });
  }
}
