'use strict';

var generateSitemap = require('./generate');

module.exports = function (mongoHost) {
  return generateSitemap(mongoHost);
};