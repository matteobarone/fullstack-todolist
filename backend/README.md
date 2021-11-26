# Backend

## Prerequisites
- Docker
- Postgress in local or in a docker container (only for dev)


## Working locally

- duplicate `.env.example` file, rename it in `.env` and set up the `POSTGRESS_PASSWORD`.
- run a postgress instance in a different terminal
- `npm install`
- `npm start`: run the server in local on port 3000

## Deploy

- `npm run build`: will create a docker image

## Run the built application

- `docker-compose up --remove-orphans`: start the containers (backend and DB)
- `docker-compose stop`: stop the containers