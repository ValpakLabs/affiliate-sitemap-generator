'use strict';

var getSlugs = require('./getSlugs');

module.exports = function callee$0$0(mongoHost) {
  var xml;
  return regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        context$1$0.next = 3;
        return regeneratorRuntime.awrap(getSlugs(mongoHost));

      case 3:
        context$1$0.sent.forEach(function (slug) {
          var url = 'https://www.valpak.' + (slug.partnerId === 7 ? 'com' : 'ca') + '/c/coupon-codes/' + slug.url;
          xml += '<url>\n      <loc>' + url + '</loc>\n      <changefreq>weekly</changefreq>\n      <priority>0.6</priority>\n    </url>';
        });

        xml += '</urlset>';

        return context$1$0.abrupt('return', xml);

      case 6:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};