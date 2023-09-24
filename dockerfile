FROM node:latest
FROM  mcr.microsoft.com/playwright:v1.37.1-jammy

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN apt-get update

RUN npm ci

COPY /src/ ./src/

RUN npx playwright install --with-deps webkit
RUN npx playwright install --with-deps chromium
