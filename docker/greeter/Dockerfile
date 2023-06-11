# syntax=docker/dockerfile:1

FROM debian:latest
WORKDIR /app
COPY package*.json ./
COPY . .
RUN apt update
RUN apt install -y nodejs npm
RUN npm install
CMD ["node", "src/index.js"]