# Shorten URL test project
## Stack
- Node.js v14
- Postgres v13

## Prerequisite

Please make sure you have node.js and postgresql installed on your system.

## Installing dependencies:
 ``yarn``

## Environment setup 
you can use .env.example to generate .env
``cp .env.example .env``
And set environment variables like below.

<pre><code>
SERVER_HOST=http://localhost:5000
PORT=5000
DB_HOST='127.0.0.1'
DB_USERNAME='postgres'
DB_PASSWORD='postgres'
DB_PORT=5432
DB_NAME='shorten-url-test'
</code></pre>

## DB create/initialize tables.
``yarn db:create`` //create db instance

``yarn db:migrate`` //migrate url table

## DB clear
``yarn db:clear``

## Run on local
``yarn dev``

** I build this on node v14. There might be some issues if you are using different versions on your system. 

Thanks for checking my code test.
