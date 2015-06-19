'use strict';

var MongoClient = require('mongodb').MongoClient;

module.exports = function callee$0$0(mongoHost) {
  return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return regeneratorRuntime.awrap(run(mongoHost));

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

////////////////////////////

function run(mongoHost) {
  var db;
  return regeneratorRuntime.async(function run$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return regeneratorRuntime.awrap(connectToDB(mongoHost));

      case 2:
        db = context$1$0.sent;
        context$1$0.next = 5;
        return regeneratorRuntime.awrap(find(db.collection('MerchantMetaDataVO'), {}, { url: true, partnerId: true, _id: false }));

      case 5:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
}

function connectToDB(mongoHost) {
  return new Promise(function (resolve, reject) {
    MongoClient.connect(mongoHost, function (err, db) {
      if (err) reject(err);else resolve(db);
    });
  });
}

function find(collection, query) {
  var projection = arguments[2] === undefined ? {} : arguments[2];

  return new Promise(function (resolve, reject) {
    collection.find(query, projection).toArray(function (err, result) {
      if (err) reject(err);else resolve(result);
    });
  });
}