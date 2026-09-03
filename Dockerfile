FROM node:20-slim AS build

WORKDIR /app

ENV CI=true

COPY package*.json ./
RUN npm ci

COPY public ./public
COPY src ./src
RUN npm run build

FROM node:20-slim AS runtime

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=8088

COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts && npm cache clean --force

COPY server.js ./server.js
COPY --from=build /app/build ./build

USER node

EXPOSE 8088

CMD ["node", "server.js"]
