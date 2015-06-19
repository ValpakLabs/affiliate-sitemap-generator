var MongoClient = require('mongodb').MongoClient;

module.exports = async function(mongoHost) {
  return await run(mongoHost);
}

////////////////////////////

async function run(mongoHost) {
  var db = await connectToDB(mongoHost);
  return await find(db.collection('MerchantMetaDataVO'), {}, {url: true, partnerId: true, _id: false});
}

function connectToDB(mongoHost) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoHost, function(err, db) {
      if (err) reject(err)
      else resolve(db)
    })
  });
}

function find(collection, query, projection={}) {
  return new Promise((resolve, reject) => {
    collection.find(query, projection).toArray(function(err, result){
      if (err) reject(err)
      else resolve(result)
    })
  });
}