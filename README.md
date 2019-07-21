# Workspace

Application that boost your productivity by providing real-time content sharing that you could use between devices. Universally available as Progressive Web App (PWA). Powered by Typescript, GraphQL, Angular and lots of magic (code generation)

## Features

- Trello-ish cards
- Real-time content sharing (Files, Text, Images)
- Cool
- **Strongly typed Full-Stack**

## Development

### Prerequisites

- `docker` and `docker-compose`

### Before you start

- use `.env.example` to make `.env` files for both root folder and `/server`

### Setup development

- run `scripts/setup-dev.sh`

### Backend

`dev.sh` acts as your good old `docker-compose` command for example:

```sh
$ ./dev.sh up # Start dev server and anything
$ ./dev.sh exec backend sh # Run shell inside backend container for debugging and stuff
```

#### Running Codegen for resolvers

```sh
# Either run in server folder
$ yarn watch-gen
# or run in docker
$ ./dev.sh exec backend yarn watch-gen
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

### Graphql Playground

make sure you have installed all dependecies for backend

```sh
$ sh scripts/playground.sh # or simply
$ scripts/playground.sh
```

backend endpoints can be configured in `client/src/enviroments`

---

## Production

clone project and name it `staging` and `production` and set branch to corresponding name

### Reverse Proxy

1. copy `reverse-proxy` folder and put it anywhere in the server
2. copy and edit the info in `default.template.conf`
3. Generate SSL certificates for both domains

#### Running Docker-way

```
docker-compose up
```

#### Running normal way

copy the files into your Nginx stuff

### Backing up

copy `scripts/backup_all.sh` and `scripts/docker_volume_backup.sh` to root folder where you have both `staging` and `production`

to backup run `./backup_all.sh`

---

Coming soon......
