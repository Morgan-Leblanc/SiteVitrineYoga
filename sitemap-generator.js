const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Define your routes manually
const routes = [
  '/',
  '/classes-and-pricing',
  '/studio',
  '/yoga-information',
  '/contact',
];

const generateSitemap = () => {
  const sitemap = new SitemapStream({ hostname: 'https://yoga-arcenciel-etampes.fr' });
  const writeStream = createWriteStream('./public/sitemap.xml');

  routes.forEach(route => sitemap.write({ url: route }));

  sitemap.end();
  streamToPromise(sitemap).then(() => {
    console.log('Sitemap successfully generated!');
  });

  sitemap.pipe(writeStream);
};

generateSitemap();
