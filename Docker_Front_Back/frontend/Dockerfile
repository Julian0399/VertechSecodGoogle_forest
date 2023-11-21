FROM node:18-alpine

WORKDIR /app

EXPOSE 9000

COPY package.json package-lock.json ./

RUN npm install 

VOLUME /app/datos

COPY . ./
