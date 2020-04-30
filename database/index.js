const mariadb = require('mariadb/callback');
const mariadbConfig = require('./config.js');

const connection = mariadb.createConnection(mariadbConfig);

module.exports.connection = connection;