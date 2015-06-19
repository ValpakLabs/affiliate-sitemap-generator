require("babel/register")({experimental: true, 'optional': [ 'es7.asyncFunctions' ]});

var generateSitemap = require('./generate');

generateSitemap().then(function(xml){
  console.log(xml)
  process.exit(0);
});