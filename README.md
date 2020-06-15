
# Reviews Service
This component renders the reviews for the products

## Getting Started
```sh
npm install -g webpack
npm install

Please ensure that mariadb is running and execute mysql -u <USER> -p < schema.sql to add the database followed by npm run seed to seed your database
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

