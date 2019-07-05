# Workspace

Application that boost your productivity by providing real-time content sharing that you could use between devices. Universally available as Progressive Web App (PWA). Powered by Typescript, GraphQL and Angular

## Features

- Trello-ish cards
- Real-time content sharing (Files, Text, Images)
- Cool

## Development

### Prerequisites

- `docker` and `docker-compose`

### Before you start

- use `.env.example` to make `.env` files for both root folder and `/server`

### Backend

`dev.sh` acts as your good old `docker-compose` command for example:

```sh
$ ./dev.sh up # Start dev server and anything
$ ./dev.sh exec backend sh # Run shell inside backend container for debugging and stuff
```

#### Ports

Port `6869` is exposed for `backend` container for both API and graphql-playground  
Port `4466` is exposed for `prisma` container also for graphql-playground

### Frontend

#### Starting dev server

```sh
$ yarn # install dependencies
$ yarn start # start development server
```

backend endpoints can be configured in `client/src/enviroments`

## Production

Coming soon......
