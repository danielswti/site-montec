import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { registerApiRoutes } from "./routes";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function start() {
  const app = express();

  app.use((_req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    if (_req.method === "OPTIONS") return res.sendStatus(200);
    next();
  });

  app.use(express.json({ limit: "1mb" }));

  registerApiRoutes(app);

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "spa",
  });
  app.use(vite.middlewares);

  const server = app.listen(3000, () => {
    console.log("Dev server: http://localhost:3000/ (API em /api/*)");
  });
}

start().catch(console.error);
