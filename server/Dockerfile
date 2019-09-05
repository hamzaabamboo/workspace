FROM node:12-alpine as build

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . . 

EXPOSE 4000

RUN yarn generate

RUN yarn build

RUN sh scripts/transfer-graphql.sh

CMD ["yarn","start:prod"]
