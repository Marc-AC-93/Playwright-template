FROM node:latest
FROM  mcr.microsoft.com/playwright:v1.35.0-jammy

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN apt-get update

COPY package.json /app/package.json

RUN npm ci

COPY src/ ./src/

RUN npx playwright install --with-deps
