const mariadb = require('mariadb/callback');
const mariadbConfig = require('./config.js');

const connection = mariadb.createConnection(mariadbConfig);

const getAllReviews = function(id, callback) {

  var sql = `select * from reviews where id=${id}`;
   connection.query(sql, function (err, results, fields) {
     if (err) {
       callback(err);
      }
   callback(null, results);
  });

};


module.exports.connection = connection;
module.exports.getAllReviews = getAllReviews;


