FROM node:22.17.0-alpine

WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn

COPY ./ ./
RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start:dev" ]