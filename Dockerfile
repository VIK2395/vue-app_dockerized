FROM node:16.13.1-alpine3.14

RUN mkdir -p /home/vue-app

WORKDIR /home/vue-app

COPY package*.json /home/vue-app

RUN npm install

COPY . /home/vue-app

EXPOSE 8080

CMD ["npm", "run", "serve"]
