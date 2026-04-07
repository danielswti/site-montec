# Contexto do Projeto (AI) — Montec Mococa

Atualizado em: 2026-02-25

Este arquivo consolida a “memória operacional” do repositório para acelerar manutenção, debug, onboarding e prompts de IA.

---

## Resumo prompt-ready (copiar/colar)

Você está trabalhando no repositório do site institucional (SPA) **Montec Mococa**.

- **Frontend**: React 18 + TypeScript + Vite (root em `client/`), TailwindCSS v4, shadcn/ui (Radix), Framer Motion, Sonner (toasts), Lucide.
- **Router SPA**: `wouter` com rotas em `client/src/App.tsx`.
- **Backends possíveis**:
  - **Express** (`server/*`): endpoints `/api/contato`, `/api/ouvidoria`, `/api/trabalhe-conosco` enviam e-mails via Nodemailer (Gmail). Em produção, serve `dist/public`.
  - **Vercel Functions** (`api/*`): mesmos endpoints, enviam via SMTP `mail.montecmococa.com.br:465`. Se credenciais não configuradas, simulam sucesso.

Comandos (pnpm na raiz):

- `pnpm dev`: dev server em `http://localhost:3000` (Vite middleware + API em `/api/*`).
- `pnpm dev:vite`: só Vite (porta 3000) com proxy `/api` → `http://localhost:3001` (suba API separada).
- `pnpm build`: `vite build` → `dist/public` + bundle do server em `dist/index.js`.
- `pnpm start`: roda produção (`NODE_ENV=production`).

Rotas SPA principais:

- `/` (Home)
- `/contato`, `/trabalhe-conosco`, `/politica-privacidade`
- `/institucional/*`, `/solucoes/*`, `/processos/*`

Contratos de API (fetch no frontend):

- `POST /api/contato` `{ nome, email, telefone, assunto, mensagem }`
- `POST /api/ouvidoria` `{ nome, email, assunto, descricao, isAnonymous }`
- `POST /api/trabalhe-conosco` `{ nome, email, telefone, vaga, mensagem, curriculo:{ data:<base64>, name } }`

Env vars importantes:

- Express: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `TO_EMAIL` (opcional), `PORT`, `NODE_ENV`.
- Vercel: `EMAIL_USER/EMAIL_PASS` (ou `GMAIL_USER/GMAIL_APP_PASSWORD`).

Pontos de atenção:

- Upload de currículo pode estourar limite (Express usa JSON `1mb`, Vercel permite `5mb`).
- Há patch do `wouter@3.7.1` coletando rotas em `window.__WOUTER_ROUTES__`.

---

## Versão detalhada

## 1) Resumo rápido

- **Produto**: site institucional (SPA) da Montec Mococa.
- **Frontend**: React + TypeScript + Vite + TailwindCSS v4 + shadcn/ui (Radix).
- **Roteamento**: `wouter` (SPA routes).
- **Backend (env alternativos)**:
  - **Express** (Node) para dev/prod “self-hosted” (Render/HostGator/etc), com rotas `/api/*` que enviam e-mail via `nodemailer`.
  - **Vercel Serverless Functions** em `api/*` com endpoints equivalentes.
- **Funcionalidades dinâmicas**: formulários de contato, ouvidoria e “trabalhe conosco” (envio com currículo em base64), toasts (Sonner), animações (Framer Motion), carrossel hero.

## 2) Stack / dependências relevantes

### Frontend

- React 18 + TS
- Vite (SPA)
- TailwindCSS v4 (`@tailwindcss/vite`, `@import "tailwindcss"`)
- UI: Radix UI + shadcn/ui (componentes em `client/src/components/ui/*`)
- Animações: `framer-motion`
- Ícones: `lucide-react`
- Toasts: `sonner`
- Router: `wouter`
- Analytics: `@vercel/analytics`

### Backend

- Express
- `nodemailer`
- (Dependência presente) `multer` — não aparece como base do upload atualmente; o currículo é enviado em base64 no body JSON.

### Ferramentas

- `tsx` para executar TS no Node (dev)
- `esbuild` para bundle do server em produção
- `prettier`

## 3) Estrutura do repositório

Diretórios principais:

- `client/`: aplicação Vite/React
  - `client/src/`: código do app
  - `client/public/`: assets estáticos (imagens, PDFs, favicon etc)
- `server/`: backend Express (rotas `/api/*`) e dev-server com Vite middleware
- `api/`: funções serverless para Vercel (endpoints `/api/*`)
- `shared/`: constantes compartilhadas
- `dist/`: build (gerado)
- `patches/`: patch do `wouter` aplicado via `pnpm patchedDependencies`

Observação: existem arquivos duplicados na raiz (`index.ts`, `routes.ts`, `dev-server.ts`) que espelham os de `server/`.

## 4) Como rodar (dev/prod) e scripts

Scripts (raiz):

- `pnpm dev`
  - Executa `tsx server/dev-server.ts`
  - **Um único servidor** em `http://localhost:3000/` servindo a SPA (Vite middleware) e a API em `/api/*`.

- `pnpm dev:vite`
  - Executa `vite --host` (porta 3000 conforme config)
  - **Requer API separada** em `http://localhost:3001` para `/api/*` (proxy configurado no Vite). Ex.: rode o server Express em outro terminal via `tsx server/index.ts`.

- `pnpm build`
  - `vite build` → gera SPA em `dist/public`
  - `esbuild server/index.ts ... --outdir=dist` → gera `dist/index.js`

- `pnpm start`
  - `NODE_ENV=production node dist/index.js`
  - Em produção, o Express serve estáticos de `dist/public` e faz fallback SPA (`index.html`).

- `pnpm check`: `tsc --noEmit`
- `pnpm format`: `prettier --write .`

## 5) Frontend: entrypoints, router e páginas

Entrypoints:

- `client/index.html`: metadados SEO básicos + root `#root`.
- `client/src/main.tsx`: render do `App` + `@vercel/analytics`.

Rotas SPA (wouter) definidas em `client/src/App.tsx`:

- `/` → Home
- `/institucional/nossa-historia`
- `/institucional/certificacoes`
- `/institucional/sustentabilidade`
- `/solucoes/construcao-mineracao`
- `/solucoes/maquinas-agricolas`
- `/solucoes/movimentacao-empilhadeiras`
- `/processos/corte-laser`
- `/processos/corte-cnc`
- `/processos/conformacao-chapas`
- `/processos/usinagem`
- `/processos/montagem-solda`
- `/processos/pintura`
- `/processos/laboratorio-qualidade`
- `/trabalhe-conosco`
- `/contato`
- `/politica-privacidade`
- fallback `:rest*` → “Página não encontrada”

Páginas:

- `client/src/pages/Home.tsx`: hero carousel + seções (sobre, soluções, processos, CTA etc).
- `client/src/pages/Contato.tsx`: formulário que faz POST em `/api/contato` + botão para abrir `OuvidoriaModal`.
- `client/src/pages/TrabalheConosco.tsx`: formulário + upload (base64) POST em `/api/trabalhe-conosco`.
- `client/src/pages/*` (institucional, privacidade, processos, soluções).

Componentes relevantes:

- `Header`/`Footer`: navegação e links.
- `HeroCarousel`: carrossel principal (Framer Motion). Banners 2 e 3 suportam **scroll suave** para seções internas via `scrollToId`.
- `ProcessosGrid` / `ProcessosSlider`: vitrine de processos.
- `StaticHeroBanner`: banner estático usado nas páginas internas.
- `OuvidoriaModal`: modal com formulário POST em `/api/ouvidoria`.
- `WhatsAppButton`: botão flutuante com link `wa.me`.

UI/Design system:

- `client/src/components/ui/*`: coleção shadcn/ui (Radix). A função `cn()` fica em `client/src/lib/utils.ts`.
- Tailwind v4 + tokens CSS em `client/src/index.css` (variáveis e tema claro/escuro).

## 6) Backend: modos de execução e responsabilidades

Existem **dois backends possíveis**, dependendo do deploy:

### 6.1) Express (self-hosted)

- Arquivos: `server/index.ts`, `server/routes.ts`, `server/dev-server.ts`.
- Responsabilidades:
  - Expor `/api/contato`, `/api/ouvidoria`, `/api/trabalhe-conosco`.
  - Enviar e-mails via `nodemailer` usando **Gmail** (`service: "gmail"`).
  - Em produção (`NODE_ENV=production`), servir a SPA estática.
- CORS: permissivo (`Access-Control-Allow-Origin: *`).
- Body JSON: limite `1mb`.

### 6.2) Vercel Functions

- Arquivos: `api/contato.ts`, `api/ouvidoria.ts`, `api/trabalhe-conosco.ts`.
- Responsabilidades:
  - Mesmos endpoints `/api/*`, porém como serverless.
  - Envio via SMTP `mail.montecmococa.com.br` na porta 465 (TLS), usando `nodemailer`.
  - Quando credenciais **não** estão configuradas, fazem **simulação** (log + `setTimeout`) e retornam sucesso.
- Body size: no `trabalhe-conosco` há `sizeLimit: "5mb"`.

## 7) Contratos de API (payloads)

### POST `/api/contato`

Body JSON:

```json
{
  "nome": "...",
  "email": "...",
  "telefone": "...",
  "assunto": "...",
  "mensagem": "..."
}
```

Respostas típicas:

- `200`: `{ "success": true, "message"?: string }`
- `400`: `{ "success": false, "message": "..." }`
- `503` (Express quando e-mail não configurado): `{ "success": false, "message": "..." }`

### POST `/api/ouvidoria`

Body JSON:

```json
{
  "nome": "...",
  "email": "...",
  "assunto": "...",
  "descricao": "...",
  "isAnonymous": true
}
```

### POST `/api/trabalhe-conosco`

Body JSON (currículo em base64):

```json
{
  "nome": "...",
  "email": "...",
  "telefone": "...",
  "vaga": "...",
  "mensagem": "...",
  "curriculo": {
    "data": "<base64>",
    "name": "arquivo.pdf"
  }
}
```

Notas:

- No frontend o arquivo é lido com `FileReader.readAsDataURL()` e extraído o trecho base64.
- No backend (Express e Vercel) o base64 vira `Buffer.from(data, "base64")` e é anexado como attachment do e-mail.

## 8) Variáveis de ambiente

### Express (server)

- `GMAIL_USER`: e-mail do remetente (Gmail).
- `GMAIL_APP_PASSWORD`: senha de app (Gmail com 2FA).
- `TO_EMAIL` (opcional): destino geral (default `contato@montecmococa.com.br`).
- `NODE_ENV`: `production` ativa o modo de servir estáticos.
- `PORT`: porta do servidor em produção.

### Vercel (functions)

- `EMAIL_USER` / `EMAIL_PASS` **ou** `GMAIL_USER` / `GMAIL_APP_PASSWORD`.
  - Implementação atual prioriza `GMAIL_*` e cai para `EMAIL_*`.
- SMTP fixo: `mail.montecmococa.com.br:465` `secure: true`.

### Frontend (Vite)

- `VITE_APP_TITLE` e `VITE_APP_LOGO` (há defaults em `client/src/const.ts`).
- `VITE_OAUTH_PORTAL_URL` e `VITE_APP_ID` existem em `client/src/const.ts` para montar `getLoginUrl()`, mas **não parecem fazer parte do fluxo atual** do site (verifique se algum componente usa isso).

## 9) Build e deploy

### Deploy “Node/Express” (ex.: Render)

- `render.yaml`:
  - build: `pnpm install && pnpm run build`
  - start: `pnpm run start`
  - define `NODE_ENV=production` e `PORT=10000`

### Deploy Vercel

- `vercel.json`:
  - build command: `pnpm run build:vercel` (somente `vite build`)
  - output: `dist/public`
  - rewrites: SPA fallback para `index.html` e mantém `/api/*` para as functions.

## 10) Peculiaridades / decisões importantes

### Patch do wouter

- `pnpm` aplica patch em `wouter@3.7.1` (`patches/wouter@3.7.1.patch`).
- O patch adiciona coleta de `element.props.path` dentro de `Switch` e salva em `window.__WOUTER_ROUTES__`.
- Possível motivação: integração com runtime/ambiente Manus.

### Manus runtime

- `vite-plugin-manus-runtime` está habilitado no Vite.
- Há componente `ManusDialog` e função `getLoginUrl()` (OAuth) que parecem vir de um template/ambiente.

### Duplicação de server na raiz

- Arquivos na raiz (`index.ts`, `routes.ts`, `dev-server.ts`) replicam os de `server/`.
- Script oficial (`pnpm dev`) usa `server/dev-server.ts`. Os arquivos duplicados podem ser legado.

### Tailwind config + shadcn

- O repositório usa Tailwind v4 com tokens em CSS (`client/src/index.css`).
- `tailwind.config.js` tem apenas `fontFamily` (Montserrat).
- `components.json` aponta para `tailwind.config.ts`, mas o arquivo existente é `tailwind.config.js` (isso afeta mais o CLI do shadcn do que a runtime do app).

## 11) Onde mexer para mudanças comuns

- **Conteúdo/sections da Home**: `client/src/pages/Home.tsx`.
- **Slides do hero**: `client/src/components/HeroCarousel.tsx`.
- **Menu/rotas**: `client/src/components/Header.tsx` e `client/src/App.tsx`.
- **Tema/paleta**: `client/src/index.css`.
- **Formulários**:
  - Contato: `client/src/pages/Contato.tsx` → `/api/contato`
  - Ouvidoria: `client/src/components/OuvidoriaModal.tsx` → `/api/ouvidoria`
  - Trabalhe Conosco: `client/src/pages/TrabalheConosco.tsx` → `/api/trabalhe-conosco`
- **Backends**:
  - Express: `server/routes.ts`
  - Vercel: `api/*.ts`

## 12) Checklist de debug rápido

- Formulários retornando 503/erro de envio:
  - Express: conferir `GMAIL_USER` e `GMAIL_APP_PASSWORD`.
  - Vercel: conferir `EMAIL_USER/EMAIL_PASS` (ou `GMAIL_*`) e credenciais SMTP.
- `pnpm dev:vite` sem API:
  - lembrar de subir também `tsx server/index.ts` (porta 3001) por causa do proxy `/api` do Vite.
- Upload de currículo falhando:
  - tamanho/limite (Vercel: 5mb no handler; Express: JSON limit 1mb pode ser baixo para anexos).
