FROM node:11.15-alpine

ENV APP_HOME=/usr/app

COPY ./src ${APP_NAME}/src
COPY ./package.json ${APP_NAME}

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]