FROM node:latest

FROM mcr.microsoft.com/playwright:focal

WORKDIR /playwright

ENV PATH /app/node_modules/.bin:$PATH

RUN apt-get update

COPY package.json /playwright/package.json
RUN npm install
RUN npx playwright install

COPY src/ /playwright/src/