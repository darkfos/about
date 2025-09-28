FROM node:lts-alpine

RUN npm i -g http-server

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i

RUN npm run build

EXPOSE 8080
CMD ["http-server", "dist"]