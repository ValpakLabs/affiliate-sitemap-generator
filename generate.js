var getSlugs = require('./getSlugs');

module.exports = async function(options) {

  var xml = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  (await getSlugs()).forEach(slug => {
    var url = `https://www.valpak.${slug.partnerId === 7 ? 'com' : 'ca'}/c/coupon-codes/${slug.url}`;
    xml += `<url>
      <loc>${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
    </url>`;
  });
  xml += '</urlset>';

  return xml;
}
