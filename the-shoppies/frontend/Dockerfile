FROM node:15-alpine AS builder
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY --chown=node:node package.json ./
COPY --chown=node:node yarn.lock ./
USER node
RUN yarn install --frozen-lockfile
RUN yarn cache clean
COPY --chown=node:node . .
RUN yarn export

FROM caddy:2-alpine
RUN apk add --no-cache \
    curl \
    && rm -rf /var/cache/apk/*
COPY --from=builder /usr/src/app/out /usr/share/caddy
COPY Caddyfile /etc/caddy/Caddyfile
EXPOSE 3000
