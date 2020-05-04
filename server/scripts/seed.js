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

for (var i = 0; i < 30; i++) {

var insertStatement = `INSERT INTO reviews(id, name, stars, date, review, image, title, avatar)
VALUES(${getRandomInt(5)}, '${faker.name.firstName()} ${faker.name.lastName()}', '${getRandomInt(2) + 4}', 'Reviewed in ${arr[getRandomInt(6)]} on ${faker.date.month()} ${(getRandomInt(29) + 1) + ','} ${getRandomInt(2) + 2018}', '${faker.lorem.sentences()} ${faker.lorem.sentences()}', 'randomURL', '${faker.lorem.sentence()}', 'avatarTBD')`;

    db.connection.query(insertStatement, function (err, result) {
     console.log('inserted')
    });

  };


