# Daily Diet API

API para registro e acompanhamento de refeições dentro e fora da dieta, construída com **Fastify**, **TypeScript**, **Knex** e **SQLite/PostgreSQL**.

---

## 🔧 Tecnologias

<div align="center">

<img src="https://svg-banners.vercel.app/api?type=typeWriter&text1=Node.js%20💚&width=600&height=80" />

<img src="https://svg-banners.vercel.app/api?type=typeWriter&text1=TypeScript%20🔵&width=600&height=80" />

<img src="https://svg-banners.vercel.app/api?type=typeWriter&text1=Fastify%20⚡&width=600&height=80" />

</div>

---

## 📌 Resumo

- API para **criação e controle de refeições**.
- Registro de refeições **dentro/fora da dieta**.
- Autenticação via **cookie de sessão**.
- Banco padrão: **SQLite**, opcional PostgreSQL.
- Código em **TypeScript** com build para `dist/`.

---

## 🗂️ Estrutura do Projeto

- `src/server.ts`
- `src/app.ts`
- `src/routes/users.ts`
- `src/routes/meals.ts`
- `src/middlewares/check-session-id-exists.ts`
- `db/migrations/*`

---

## 🚀 Instalação

```bash
npm install
npm run migrate:latest
npm run dev
```

---

## 📜 Scripts

| Script                     | Descrição                   |
| -------------------------- | --------------------------- |
| `npm run dev`              | Ambiente de desenvolvimento |
| `npm run build`            | Compila para `dist/`        |
| `npm run start`            | Executa build               |
| `npm run knex`             | CLI do Knex                 |
| `npm run migrate:make`     | Cria migration              |
| `npm run migrate:latest`   | Aplica migrations           |
| `npm run migrate:rollback` | Reverte última migration    |

---

## 🧪 Testes

```bash
npm run test
```

Usando **Vitest**.

---

## 📄 Licença

MIT License.
