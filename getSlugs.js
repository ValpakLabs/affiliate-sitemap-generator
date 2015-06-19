var MongoDB = require('mongodb');
var MongoClient = MongoDB.MongoClient;

var dbHost = 'mongodb://mongodb-01.coxtarget.com/valpak';
var collection = 'MerchantMetaDataVO';


module.exports = async function() {
  return await run();
}

////////////////////////////

async function run() {
  console.log('\nGenerating sitemap\n');
  var db = await connectToDB(dbHost);
  return await find(db.collection(collection), {}, {url: true, partnerId: true, _id: false});
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