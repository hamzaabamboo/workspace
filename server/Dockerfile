FROM node:12-alpine as build

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . . 

EXPOSE 4000

RUN yarn generate

RUN yarn build

RUN sh scripts/transfer-graphql.sh

FROM node:12-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

COPY --from=build /app/node_modules ./node_modules

COPY package.json .

CMD ["yarn","start:prod"]
