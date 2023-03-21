FROM node:latest

RUN mkdir -p /usr/src/bot
WORKDIR /usr/src/bot

COPY package*.json /usr/src/bot/
RUN npm install

COPY . /usr/src/bot/
EXPOSE 8080
CMD ["npm", "start"]