# Distributed Warehouse - POC application

This is a DEMO of a proof of concept. It has been stripped from production
related code, authentication, API requests as well as slightly modified from its
original state.

The application was built to be used by personell in clothing stores in a bigger
chain. If a customer bought a product online and selected "pick-up in store",
the store would receive a request to handle the order. The request need to be
anwered within two hours, else the order would be forwarded to head warehouse.

## A postgresql database is needed to run the app locally

### Postgres

Here is a guide for installing postgres on mac and setting up a basic database:
<https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/>

#### install postgres on Windows

<https://www.postgresql.org/download/windows/> here you find an interactive
installer or zip files. Documentation for setup on windows here:
<https://www.labkey.org/Documentation/wiki-page.view?name=installPostgreSQLWindows>

### When PostgreSQL is installed

Connect to default database

```bash
psql postgres
```

Create user "me" with password "password"

```postgres
postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';
```

To give user permission to create a database

```postgres
postgres=# ALTER ROLE me CREATEDB;
```

Connect to DB with user

```postgres
psql -d postgres -U me
```

Create database

```postgres
postgres=> CREATE DATABASE distributed_warehouse;
```

Connect to new database

```postgres
postgres=> \c distributed_warehouse;
```

Use the notes in pg_init.sql to paste in needed data in postgres.

### Add database port in environment

In your .env-file, paste in the following (username, password and database name
need to match what you set up in postgres. Default port in postgres are 5432
which is used here):

```.env
USER = "me"
HOST = "localhost"
DATABASE = "distributed_warehouse"
PASSWORD = "password"
DATABASE_PORT = 5432
```

Make sure to add a port in your environment file as well

```.env
PORT = 3000
```

### Postman

<https://www.getpostman.com/>

### Add mock-orders into the database

send a POST request to <http://localhost:3000/api/orders/> with JSON body. Mock
order from test environment can be found in extra/acme-boutique and
extra/acme-industries.

For each order added in DB a new unique ordernumber must be created:

```json
"order_number": "..."
```

Add the storeaccount name manually in src/components/MainView/index.js

```js script
const storeName = 'test_store_4';
```
