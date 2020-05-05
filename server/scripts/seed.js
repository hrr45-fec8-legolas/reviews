const db = require('../../database');
var mariadb = require('mariadb/callback');
var express = require ('express');
const mariadbConfig = require('../../database/config.js');
const connection = require('../../database/index.js');
const faker = require('faker');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var arr = ['the United States', 'the United States', 'the United States', 'the United States', 'the United States', `${faker.address.country()}`]

var counter;

for (var j = 0; j < 4; j++) {
for (var i = 0; i < 4; i++) {
 counter = 0;
  while (counter < 5000) {
      var insertStatement = `INSERT INTO reviews(id, name, stars, date, review, image, title, avatar, foundThisHelpful)
      VALUES(${getRandomInt(101)}, '${faker.name.firstName()} ${faker.name.lastName()}', '${getRandomInt(12)}', 'Reviewed in ${arr[getRandomInt(6)]} on ${faker.date.month()} ${(getRandomInt(29) + 1) + ','} ${getRandomInt(2) + 2018}', '${faker.lorem.sentences()} ${faker.lorem.sentences()}', 'randomURL', '${faker.lorem.sentence()}', '${getRandomInt(16)}', '${getRandomInt(86)}')`;
      db.connection.query(insertStatement, function (err, result) {
      });
    counter++
    if(j === 3 && i === 3 && counter === 4999) {
      console.log('done seeding!');
    }
  };
};
};







