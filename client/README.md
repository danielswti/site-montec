# Projeto Montec Mococa - Website

Este repositório contém o código-fonte completo do website da Montec Mococa, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Configuração do Projeto

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- [Node.js](https://nodejs.org/en/) (versão 18 ou superior)
- [pnpm](https://pnpm.io/installation/) (gerenciador de pacotes, alternativamente pode usar `npm` ou `yarn`)

### Instalação

1.  **Navegue até o diretório do projeto:**
    ```bash
    cd /caminho/para/export_montec_completo/client
    ```

2.  **Instale as dependências:**
    Utilizando `pnpm` (recomendado):
    ```bash
    pnpm install
    ```
    Ou, utilizando `npm`:
    ```bash
    npm install
    ```
    Ou, utilizando `yarn`:
    ```bash
    yarn install
    ```

### Rodando o Projeto Localmente

Para iniciar o servidor de desenvolvimento:

Utilizando `pnpm`:
```bash
pnpm dev
```
Ou, utilizando `npm`:
```bash
npm run dev
```
Ou, utilizando `yarn`:
```bash
yarn dev
```

O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível).

### Construindo para Produção

Para gerar os arquivos otimizados para produção:

Utilizando `pnpm`:
```bash
pnpm build
```
Ou, utilizando `npm`:
```bash
npm run build
```
Ou, utilizando `yarn`:
```bash
yarn build
```

Os arquivos compilados serão gerados na pasta `dist/`.

## 📂 Estrutura do Projeto

```
client/
├── public/                  # Arquivos estáticos (imagens, favicons)
├── src/                     # Código-fonte principal
│   ├── assets/              # Imagens e outros recursos
│   ├── components/          # Componentes React reutilizáveis
│   │   ├── ui/              # Componentes de UI (shadcn/ui)
│   │   └── ...              # Outros componentes customizados
│   ├── contexts/            # Contextos React (ex: ThemeContext)
│   ├── hooks/               # Hooks React customizados
│   ├── pages/               # Páginas do aplicativo (rotas)
│   │   ├── processos/       # Páginas de processos específicos
│   │   └── solucoes/        # Páginas de soluções específicas
│   ├── App.tsx              # Componente principal e roteamento
│   ├── main.tsx             # Ponto de entrada da aplicação
│   ├── index.css            # Estilos globais
│   └── const.ts             # Constantes e configurações
├── .gitignore               # Arquivos e diretórios a serem ignorados pelo Git
├── index.html               # Arquivo HTML principal
├── package.json             # Metadados do projeto e dependências
├── pnpm-lock.yaml           # Lockfile do pnpm
├── tailwind.config.js       # Configuração do Tailwind CSS
├── tsconfig.json            # Configuração do TypeScript
└── vite.config.ts           # Configuração do Vite
```

## 🛠️ Tecnologias Utilizadas

-   **React:** Biblioteca JavaScript para construção de interfaces de usuário.
-   **TypeScript:** Superset do JavaScript que adiciona tipagem estática.
-   **Vite:** Ferramenta de build rápida para projetos web.
-   **Tailwind CSS:** Framework CSS utilitário para estilização rápida.
-   **Wouter:** Pequena biblioteca de roteamento para React.
-   **Sonner:** Biblioteca para toasts/notificações.
-   **Lucide React:** Biblioteca de ícones.

## 📝 Notas para o Desenvolvedor

-   As imagens do site estão localizadas na pasta `public/` e `src/assets/`.
-   Para alterar o conteúdo textual, procure os arquivos `.tsx` nas pastas `pages/` e `components/`.
-   O roteamento é configurado no arquivo `src/App.tsx`.
-   A paleta de cores e configurações de estilo estão em `tailwind.config.js` e `src/index.css`.

---

**Gerado por:** Manus AI
