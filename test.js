var fn = require('./lib/index.js');

fn('mongodb://mongodb-01.coxtarget.com/valpak').then(function(xml){
  console.log(xml)
}).catch(function(err){
  console.log(err)
})