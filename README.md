# Projeto Montec Mococa - Versão Completa para Reinstalação

Este arquivo contém as instruções para reinstalar e continuar a edição do projeto do site Montec Mococa em um novo ambiente Manus.

## 🚀 Reinstalação e Execução

O projeto utiliza o **Vite** como ferramenta de build, **React** com **TypeScript** para o frontend e **pnpm** como gerenciador de pacotes.

### 1. Pré-requisitos

Certifique-se de que o ambiente de destino tenha:
*   **Node.js** (versão 18 ou superior)
*   **pnpm** (recomendado, mas `npm` ou `yarn` também podem ser usados)

### 2. Passos para Reinstalação

1.  **Descompactar o Projeto:**
    Descompacte o arquivo ZIP em um novo diretório.

2.  **Acessar o Diretório:**
    Abra o terminal e navegue até o diretório raiz do projeto (onde este `README.md` está).

3.  **Instalar Dependências:**
    O projeto usa o `pnpm` para gerenciar as dependências.
    ```bash
    pnpm install
    ```
    *(Se estiver usando `npm`: `npm install`)*

4.  **Executar em Desenvolvimento:**
    Para iniciar o servidor de desenvolvimento e visualizar o site:
    ```bash
    pnpm run dev
    ```
    O site estará acessível em um endereço local (ex: `http://localhost:3000` ou outra porta disponível).

## 📁 Estrutura do Projeto

A estrutura de pastas foi mantida para garantir a compatibilidade com o ambiente de desenvolvimento moderno (Vite/React).

| Diretório | Conteúdo Principal |
| :--- | :--- |
| `client/src/pages/` | Arquivos principais das páginas (Home, Contato, Processos, etc.) |
| `client/src/components/` | Componentes React reutilizáveis (Header, Footer, Carrossel, etc.) |
| `client/public/` | **Assets Estáticos:** Imagens, ícones e outros arquivos públicos. |
| `server/` | Código do backend (Node.js + Express) |
| `shared/` | Constantes e código compartilhado entre frontend e backend |
| `vite.config.ts` | Arquivo de configuração do Vite |
| `package.json` | Lista de dependências e scripts de execução |
| `pnpm-lock.yaml` | Arquivo de lock para garantir a reprodutibilidade das dependências |

## 📄 Arquivos Principais

*   **Ponto de Entrada (Frontend):** `client/index.html`
*   **Aplicação Principal (React):** `client/src/main.tsx`
*   **Página Inicial:** `client/src/pages/Home.tsx`

## 🔗 Dependências Externas

O projeto utiliza diversas bibliotecas externas, que serão instaladas automaticamente com o `pnpm install`. O arquivo `pnpm-lock.yaml` garante que as versões corretas sejam instaladas.

---
*Este projeto foi organizado e exportado por Manus AI para garantir a continuidade do desenvolvimento.*
