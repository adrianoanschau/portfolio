# Portfólio • Adriano Anschau

Este é meu portfólio profissional, desenvolvido com **React** + **MUI (Material UI)** e animações com **Framer Motion**. O projeto destaca meus principais trabalhos, serviços oferecidos, depoimentos, contato e informações sobre minha trajetória como desenvolvedor.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [MUI (Material UI)](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Iconify](https://iconify.design/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- Docker + nginx em VPS (`aanschau.tech`)

## 📸 Funcionalidades

- Sessão Hero animada com gradiente dinâmico
- Sobre mim com animações e destaques técnicos
- Lista de projetos com imagens e informações técnicas
- Catálogo de serviços oferecidos
- Depoimentos de clientes (mock ou reais)
- Formulário de contato integrado (Telegram, Formspree, email)
- Rodapé moderno com navegação rápida

## 💻 Como rodar localmente

Requisitos: Node `22.14.0` e yarn 1 (`>=1.22.0 <2`).

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/adrianoanschau/portfolio.git
   cd portfolio
   ```

2. **Instale as dependências:**

   ```bash
   yarn install
   ```

3. **Crie o `.env.local`** na raiz com as três variáveis do formulário de contato:

   ```bash
   VITE_APP_TELEGRAM_TOKEN=
   VITE_APP_CHAT_ID=
   VITE_APP_FORMSPREE_ENDPOINT=
   ```

   Essas variáveis são embutidas no JavaScript no build e ficam públicas. Detalhes na seção [Deploy](#deploy).

4. **Suba o servidor de desenvolvimento:**

   ```bash
   yarn dev
   ```

5. **Gere o build de produção:**

   ```bash
   yarn build
   ```

## Deploy

O site é servido na raiz de `https://aanschau.tech`. O VPS **não faz build**: o GitHub Actions gera a imagem e publica no GHCR. No servidor, o Caddy encaminha o domínio para o container nginx na porta `8080`.

### Fluxo

1. Um push na `main` dispara o workflow **Deploy (VPS)** (`.github/workflows/deploy.yml`).
2. O job de build publica `ghcr.io/adrianoanschau/portfolio` com as tags `sha-<12 primeiros caracteres do commit>` e `latest`. As `VITE_APP_*` entram como build-args a partir dos secrets do repositório.
3. Se a variável `DEPLOY_ENABLED` do environment `production` for `true`, o job entra por SSH com uma chave restrita (forced command) e roda `deploy sha-<12>` no VPS. Caso contrário, o deploy é pulado e o workflow termina com um aviso.
4. O mesmo workflow pode ser disparado à mão com `workflow_dispatch` (Actions → Deploy (VPS) → Run workflow).

### Configuração

| Onde | Nome | Papel |
| --- | --- | --- |
| Environment `production` (variável) | `DEPLOY_ENABLED` | Precisa ser `true` para o job de deploy rodar |
| Environment `production` (secret) | `VPS_HOST` | Host SSH do VPS |
| Environment `production` (secret) | `VPS_USER` | Usuário SSH |
| Environment `production` (secret) | `VPS_SSH_KEY` | Chave privada restrita (forced command) |
| Environment `production` (secret) | `VPS_KNOWN_HOSTS` | Entrada de `known_hosts` do VPS |
| Secret do repositório | `VITE_APP_TELEGRAM_TOKEN` | Build-arg do formulário (Telegram) |
| Secret do repositório | `VITE_APP_CHAT_ID` | Build-arg do formulário (Telegram) |
| Secret do repositório | `VITE_APP_FORMSPREE_ENDPOINT` | Build-arg do formulário (Formspree) |

**As variáveis `VITE_*` são públicas.** O Vite as grava no bundle JavaScript; qualquer visitante do site consegue lê-las no código-fonte da página. Elas não são segredos de verdade: o build-arg só evita commitá-las neste repositório. O pacote no GHCR (`ghcr.io/adrianoanschau/portfolio`) deve permanecer **privado**.

### Rollback

Pela mesma chave SSH restrita:

```bash
ssh <usuario>@<host> rollback
```

Ou, já no VPS:

```bash
/opt/portfolio/deploy-portfolio.sh --rollback
```

### Teste local da imagem

```bash
docker build -t portfolio:local .
docker run --rm -p 8080:8080 portfolio:local
```

Abra `http://127.0.0.1:8080`. O healthcheck responde em `/healthz`.
