FROM node:10-alpine as build

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . . 

RUN yarn generate

RUN yarn build

RUN sh scripts/transfer-graphql.sh

FROM node:10-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY --from=build /app/node_modules ./node_modules

COPY package.json .

CMD ["yarn","start:prod"]
