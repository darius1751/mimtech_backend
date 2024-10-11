# API

## Commands

### Installation

---

```bash
    # Install packages
    yarn add
    or 
    npm install
```

### Running the app

---

```bash
    # Generate folder dist/ for production version
    yarn build
    or 
    npm run build

    # Run app
    yarn start
    or
    npm start
```

## Endpoint Swagger

/api-docs

## Requirements

* [NodeJs](https://nodejs.org/)
* [Postgres](https://www.postgresql.org/)
* or
* [Docker](https://www.docker.com/)

## Enviroments

```bash
#File .env.template
#rename to .env and change values
PORT=YOUR_PORT_RUN_EXPRESS #Port in run express app
POSTGRES_USER=YOUR_POSGRES_USER # User DB
POSTGRES_PASSWORD=YOUR_POSGRES_PASSWORD # Password DB
POSTGRES_DB=YOUR_POSGRES_DB # Name DB
SIGNATURE_JWT=YOUR_SIGNATURE_JWT # Additional info by your JWT
SECRET_JWT=YOUR_SECRET_JWT # The Secret JWT
```
