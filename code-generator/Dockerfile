FROM node:alpine

WORKDIR /app

RUN yarn global add nodemon

COPY package.json .

RUN yarn install

COPY . . 

CMD ["yarn", "watch" ]