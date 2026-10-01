# syntax=docker/dockerfile:1
# check=skip=SecretsUsedInArgOrEnv
# =============================================================================
# Dockerfile — portfólio (Vite + React) servido por nginx sem root.
#
# Build (feito só no GitHub Actions; o VPS apenas faz `docker pull`):
#   docker build \
#     --build-arg VITE_APP_TELEGRAM_TOKEN=... \
#     --build-arg VITE_APP_CHAT_ID=... \
#     --build-arg VITE_APP_FORMSPREE_ENDPOINT=... \
#     -t ghcr.io/adrianoanschau/portfolio:dev .
#
# ATENÇÃO: as variáveis VITE_* são embutidas no JavaScript do bundle e ficam
# PÚBLICAS para qualquer visitante (é assim que o Vite funciona). Elas não
# são segredos de verdade; o build-arg só evita commitá-las no repositório.
# Por isso a regra SecretsUsedInArgOrEnv está desligada acima. Elas existem
# só no estágio `build` — a imagem final contém apenas o dist/ (que já as
# carrega, de qualquer forma). Mantenha o pacote do GHCR privado.
# =============================================================================

# ---- Estágio 1: build ---------------------------------------------------------
FROM node:22.14-alpine AS build
WORKDIR /app

# Dependências primeiro (camada cacheada enquanto o yarn.lock não mudar).
COPY package.json yarn.lock ./
RUN --mount=type=cache,target=/usr/local/share/.cache/yarn \
    yarn install --frozen-lockfile --non-interactive

COPY . .

ARG VITE_APP_TELEGRAM_TOKEN=""
ARG VITE_APP_CHAT_ID=""
ARG VITE_APP_FORMSPREE_ENDPOINT=""
ENV VITE_APP_TELEGRAM_TOKEN=$VITE_APP_TELEGRAM_TOKEN \
    VITE_APP_CHAT_ID=$VITE_APP_CHAT_ID \
    VITE_APP_FORMSPREE_ENDPOINT=$VITE_APP_FORMSPREE_ENDPOINT

# Os source maps não são publicados (o código-fonte não fica exposto).
RUN yarn build && find dist -name '*.map' -delete

# ---- Estágio 2: runtime (nginx sem root, porta 8080) --------------------------
FROM nginxinc/nginx-unprivileged:1.28-alpine

LABEL org.opencontainers.image.source="https://github.com/adrianoanschau/portfolio" \
      org.opencontainers.image.description="Portfólio de Adriano Anschau (aanschau.tech)" \
      org.opencontainers.image.licenses="MIT"

# Silencia os scripts do entrypoint (o default.conf abaixo já é o nosso).
ENV NGINX_ENTRYPOINT_QUIET_LOGS=1

# Remove a página padrão do nginx (index.html/50x.html) antes de copiar o dist/.
USER root
RUN rm -rf /usr/share/nginx/html/*
USER 101

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Roda como o usuário `nginx` (uid 101, definido acima), sem root.
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --start-interval=2s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1:8080/healthz || exit 1
