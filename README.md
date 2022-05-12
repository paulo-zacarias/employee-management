# Employee Management

This is a simple project that implements a tool for managing employees in different offices.

## Stack

• Angular + Angular Material

• NodeJs + PostgreSql

## Running

This project requires [Docker](https://www.docker.com/).
The environment variables need to be set in a `.env` file in the project's root folder (please refer to `docker-compose.yml` file for an overview of those variables).
Then, in the root folder run `docker-compose up -d`. After containers are up and running navigate to `http://localhost:4200/`.
To run the e2e tests and exit after done run `docker-compose up --exit-code-from cypress`.
