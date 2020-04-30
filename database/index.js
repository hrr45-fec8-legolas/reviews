const mariadb = require('mariadb/callback');
const mariadbConfig = require('./config.js');

const connection = mariadb.createConnection(mariadbConfig);

const getAllReviews = function(callback) {

  var sql = 'select * from reviews';
   connection.query(sql, function (err, results, fields) {
     if (err) {
       console.error(err)
     }
   callback(results);
  });

};





module.exports.connection = connection;
module.exports.getAllReviews = getAllReviews;

