# Get the base image of Node version 16
FROM node:latest

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:focal

# Set the work directory for the application
WORKDIR /playwright

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# COPY the needed dependencies to execute the code
COPY package.json /playwright/package.json

# Get the needed libraries to run Playwright
RUN apt-get update

# Install the dependencies in Node environment
RUN npm install

# COPY the needed files to the app folder in Docker image
COPY src/ /playwright/src/