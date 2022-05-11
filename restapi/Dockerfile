FROM node:16.15-alpine3.14
WORKDIR /usr/src/restapi
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "server.js" ]