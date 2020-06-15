
# Reviews Service
This component renders the reviews for the products

## Getting Started
```sh
npm install -g webpack
npm install
``` 

## Seeding DB
> Run this after ensuring you have Mariadb installed
```sh
mysql -u <USER> -p < schema.sql
npm run seed
```

## Running the tests
```sh
npm run test
to run the tests with a coverage report: npm test:coverage
```
## Running server and client locally
```sh
npm run build
npm run watch
nodemon ./server.js localhost 3004
```

Visit your localhost at port 3004!
Append /?id= with any number between 1 and 10,000,000 to your url to see product reviews.

## CRUD Operations
| HTTP Verb |           Endpoint          |            Action            |
|-----------| --------------------------- | ---------------------------- |
| **POST**  |       /api/reviews          |  CREATE a new item into DB   |
| **GET**   |       /api/reviews          |  READ data and return        |
| **PUT**   |       /api/reviews          |  UPDATE item with new image  |
| **DELETE**|       /api/reviews          |  DELETE item based on ID     |
