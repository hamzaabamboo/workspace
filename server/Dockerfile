FROM node:alpine

WORKDIR /app

COPY package.json .

RUN yarn install

COPY . . 

EXPOSE 4000

RUN yarn run prisma-generate

RUN yarn run graphql codegen

CMD ["yarn", "start" ]