var MongoClient = require('mongodb').MongoClient;

module.exports = async (mongoHost) => await run(mongoHost);

////////////////////////////

async function run(mongoHost) {
  var db = await connectToDB(mongoHost);
  var results = await find(db.collection('MerchantMetaDataVO'), {}, {url: true, partnerId: true, _id: false});
  await closeDb(db);
  return results;
}

function connectToDB(mongoHost) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoHost, (err, db) => {
      if (err) reject(err);
      else resolve(db);
    });
  });
}

function closeDb(db) {
  return new Promise((resolve, reject) => {
    db.close(() => resolve());
  });
}

function find(collection, query, projection={}) {
  return new Promise((resolve, reject) => {
    collection.find(query, projection).toArray((err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}
