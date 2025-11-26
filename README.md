# Daily Diet API

API para registro e acompanhamento de refeições dentro e fora da dieta, construída com **Fastify**, **TypeScript**, **Knex** e **SQLite/PostgreSQL**.

---

## 🔧 Tecnologias

<img alt="node" src="https://img.shields.io/badge/Node-ES2020-339933?logo=node.js&style=for-the-badge" />
<img alt="ts" src="https://img.shields.io/badge/TypeScript-ES2020-3178C6?logo=typescript&style=for-the-badge" />
<img alt="fastify" src="https://img.shields.io/badge/Fastify-Server-0058B0?logo=fastify&style=for-the-badge" />
<img alt="knex" src="https://img.shields.io/badge/Knex-QueryBuilder-0F172A?logo=knex&style=for-the-badge" />
<img alt="sqlite" src="https://img.shields.io/badge/SQLite-Database-003B57?logo=sqlite&style=for-the-badge" />

---

## 📌 Resumo

- API para **criação e controle de refeições**.
- Registro de refeições “**dentro**” ou “**fora**” da dieta.
- Autenticação via **cookie de sessão**.
- Banco padrão: **SQLite** com opção para PostgreSQL.
- Código em **TypeScript** com build para `dist/`.

---

## 🗂️ Estrutura do Projeto

- **Entrada:** `src/server.ts`
- **Configuração:** `src/app.ts`, `src/database.ts`, `knexfile.ts`
- **Rotas:** `src/routes/users.ts`, `src/routes/meals.ts`
- **Middleware:** `src/middlewares/check-session-id-exists.ts`
- **Migrations:** `db/migrations/*`
- **Tipagens:** `src/@types/*`

---

## 📦 Requisitos

- Node **18+**
- npm
- SQLite (default) ou PostgreSQL

---

## 🚀 Instalação e Execução

```bash
npm install
cp .env.example .env  # se existir
npm run migrate:latest
npm run dev
```

---

## 📜 Scripts

| Script                     | Descrição                   |
| -------------------------- | --------------------------- |
| `npm run dev`              | Ambiente de desenvolvimento |
| `npm run build`            | Compila para `dist/`        |
| `npm run start`            | Executa versão compilada    |
| `npm run knex`             | Acessa CLI do Knex          |
| `npm run migrate:make`     | Cria migration              |
| `npm run migrate:latest`   | Aplica migrations           |
| `npm run migrate:rollback` | Reverte última migration    |

---

## 🗃️ Banco de Dados

- Migrations em `db/migrations/`
- Configuração em `db/knex.ts`
- Alternância entre SQLite e Postgres via `.env`

---

## 🔌 Rotas

### 👤 Usuários

- Registro
- Cookie de sessão
- Middleware de autenticação leve

### 🍽️ Refeições

- CRUD
- Marcação dentro/fora da dieta
- Métricas: progresso, total, melhor sequência

---

## 🧪 Testes

```bash
npm run test
```

Usando **Vitest**.

---

## 📌 Observações

- Tipagem estrita (TS Strict)
- Target ES2020
- Output em `dist/`

---

## 🤝 Contribuição

Issues e PRs são bem-vindos.
