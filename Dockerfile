FROM --platform=linux/amd64 node:22-slim

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

CMD ["node", "dist/main.js"]
