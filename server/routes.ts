import express from "express";
import nodemailer from "nodemailer";

const TO_EMAIL = process.env.TO_EMAIL || "contato@montecmococa.com.br";
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD;

export function getTransporter() {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });
}

export function registerApiRoutes(app: express.Express) {
  app.post("/api/contato", async (req, res) => {
    const transporter = getTransporter();
    if (!transporter) {
      return res.status(503).json({
        success: false,
        message: "Serviço de e-mail não configurado (GMAIL_USER/GMAIL_APP_PASSWORD).",
      });
    }
    try {
      const { nome, email, telefone, assunto, mensagem } = req.body || {};
      if (!nome?.trim() || !email?.trim() || !assunto?.trim() || !mensagem?.trim()) {
        return res.status(400).json({ success: false, message: "Preencha todos os campos obrigatórios." });
      }
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
        from: GMAIL_USER,
        to: TO_EMAIL,
        replyTo: email,
        subject: `[Site] Fale Conosco: ${assunto}`,
        html,
      });
      return res.json({ success: true });
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
  });

  app.post("/api/ouvidoria", async (req, res) => {
    const transporter = getTransporter();
    if (!transporter) {
      return res.status(503).json({ success: false, message: "Serviço de e-mail não configurado." });
    }
    try {
      const { nome, email, assunto, descricao, isAnonymous } = req.body || {};
      if (!assunto?.trim() || !descricao?.trim()) {
        return res.status(400).json({ success: false, message: "Preencha assunto e descrição." });
      }
      const html = `
        <h2>OUVIDORIA MONTEC - ${isAnonymous ? "Anônimo" : "Identificado"}</h2>
        <p><strong>Nome:</strong> ${isAnonymous ? "Anônimo" : nome || "Não informado"}</p>
        <p><strong>E-mail:</strong> ${isAnonymous ? "Não informado" : email || "Não informado"}</p>
        <p><strong>Assunto:</strong> ${assunto}</p>
        <p><strong>Descrição:</strong></p>
        <p>${(descricao || "").replace(/\n/g, "<br>")}</p>
        <hr><p><em>Enviado em ${new Date().toLocaleString("pt-BR")} via site Montec Mococa</em></p>
      `;
      await transporter.sendMail({
        from: GMAIL_USER,
        to: TO_EMAIL,
        replyTo: isAnonymous ? undefined : email,
        subject: `[Ouvidoria] ${assunto}`,
        html,
      });
      return res.json({ success: true });
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
  });

  app.post("/api/trabalhe-conosco", async (req, res) => {
    const transporter = getTransporter();
    if (!transporter) {
      return res.status(503).json({ success: false, message: "Serviço de e-mail não configurado." });
    }
    try {
      const { nome, email, telefone, vaga, mensagem, curriculo: curriculoPayload } = req.body || {};
      const hasFile = curriculoPayload?.data;
      if (!nome?.trim() || !email?.trim() || !hasFile) {
        return res.status(400).json({
          success: false,
          message: "Preencha nome, e-mail e anexe o currículo.",
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
      const buffer = Buffer.from(curriculoPayload.data, "base64");
      await transporter.sendMail({
        from: GMAIL_USER,
        to: TO_EMAIL,
        replyTo: email,
        subject: `[Trabalhe Conosco] ${nome} - ${vaga || "Currículo"}`,
        html,
        attachments: [{ filename: curriculoPayload.name || "curriculo", content: buffer }],
      });
      return res.json({ success: true });
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
  });
}
