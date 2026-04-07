import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { registerApiRoutes } from "./routes";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
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

  const isProduction = process.env.NODE_ENV === "production";
  if (isProduction) {
    const staticPath = path.resolve(__dirname, "public");
    app.use(express.static(staticPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(staticPath, "index.html"));
    });
  }

  const server = createServer(app);
  const port = process.env.PORT || (isProduction ? 3000 : 3001);

  server.listen(port, () => {
    console.log(
      isProduction
        ? `Server running at http://localhost:${port}/`
        : `API (email) running at http://localhost:${port}/ (use with Vite proxy /api)`
    );
  });
}

startServer().catch(console.error);
