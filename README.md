# Daily Diet API

<!-- Badges (shields) -->

<img alt="node" src="https://img.shields.io/badge/Node-ES2020-339933?logo=node.js&style=for-the-badge" /> <img alt="ts" src="https://img.shields.io/badge/TypeScript-ES2020-3178C6?logo=typescript&style=for-the-badge" /> <img alt="fastify" src="https://img.shields.io/badge/Fastify-Server-0058B0?logo=fastify&style=for-the-badge" /> <img alt="knex" src="https://img.shields.io/badge/Knex-Query-0F172A?logo=knex&style=for-the-badge" /> <img alt="sqlite" src="https://img.shields.io/badge/SQLite-DB-003B57?logo=sqlite&style=for-the-badge" />

<!-- "Animação" com ícones de shield (simples, via CSS inline; pode não animar em todos os renderizadores) -->
<div align="center">
  <style>
    @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
    .shield { width: 120px; margin: 6px; animation: float 2.5s ease-in-out infinite; }
  </style>
  <img class="shield" alt="shield-node" src="https://img.shields.io/badge/Node.js-✔️-339933?style=flat-square" />
  <img class="shield" alt="shield-ts" src="https://img.shields.io/badge/TypeScript-✔️-3178C6?style=flat-square" />
  <img class="shield" alt="shield-fastify" src="https://img.shields.io/badge/Fastify-✔️-0058B0?style=flat-square" />
</div>

Resumo curto

- API simples para registrar refeições (dentro/fora da dieta) com Fastify, Knex e SQLite/Postgres.
- Código em TypeScript; saída compilada em `dist/`.

Visão geral do projeto

- Entrada: `src/server.ts`
- Inicialização/Config: `src/app.ts`, `src/database.ts`, `knexfile.ts`
- Rotas principais: `src/routes/users.ts`, `src/routes/meals.ts`
- Middleware de sessão: `src/middlewares/check-session-id-exists.ts`
- Migrations: `db/migrations/*`
- Tipagens customizadas: `src/@types/*`

Requisitos

- Node 18+ (suporta ES2020)
- npm
- SQLite (por padrão) ou Postgres (opcional)

Instalação / execução (rápido)

1. Instalar dependências:

```bash
npm install
```

2. Criar arquivo `.env` (ex.: copiar de `.env.example` se existir) e ajustar:

```env
NODE_ENV=development
DATABASE_CLIENT=sqlite
DATABASE_URL=file:./dev.db
PORT=3333
```

3. Rodar migrations:

```bash
npm run migrate:latest
```

4. Iniciar em modo dev:

```bash
npm run dev
```

Scripts úteis (package.json)

- npm run dev — rodar em desenvolvimento (tsx watch)
- npm run build — compilar TypeScript para `dist/`
- npm run start — rodar build (node dist/server.js)
- npm run knex — CLI do Knex via tsx
- npm run migrate:make — criar nova migration
- npm run migrate:latest — aplicar migrations
- npm run migrate:rollback — reverter última migration

Banco de dados / Migrations

- Arquivos em `db/migrations/`
- Arquivo helper do Knex: `db/knex.ts`
- Use `DATABASE_CLIENT` (sqlite | pg) e `DATABASE_URL` para alternar entre SQLite e Postgres

Rotas principais (resumo)

- Usuários
  - Registro de usuário e criação de cookie de sessão
  - Middleware associa `request.user` via cookie
- Refeições
  - CRUD de refeições (criar, listar, editar, excluir)
  - Endpoints para métricas/resumo da dieta

Testes

- Configurar env de teste (`.env.test`) e rodar:

```bash
npm run test
```

(Verifique `package.json` para o comando de testes; usa Vitest/tsx conforme o projeto)

Observações rápidas

- Projeto com tipagem estrita (TS strict).
- Arquivo `tsconfig.json` está configurado para target ES2020 e saída em `dist/`.
- Badges acima usam shields.io para ícones/visualização.

Contribuição

- Abrir issue ou PR com descrição clara e testes quando aplicável.
