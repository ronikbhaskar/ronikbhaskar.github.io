const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');


hexo.extend.filter.register('after_generate', async function () {
  const routePath = 'sitemap.xml'; // update if needed

  const routes = hexo.route.list();
  if (!routes.includes(routePath)) {
    console.log(`Route ${routePath} not found.`);
    return;
  }

  const routeStream = hexo.route.get(routePath);
  if (!routeStream) return;

  // Convert RouteStream to string
  let sitemap = '';
  for await (const chunk of routeStream) {
    sitemap += chunk.toString();
  }

  if (!sitemap.includes('</urlset>')) {
    console.log('Sitemap does not look like valid XML.');
    return;
  }

  // Pull extra URLs from _config.yml
  const extraUrls = hexo.config.extra_sitemap_urls || [];

  // Only add URLs that aren't already in the sitemap
  const newUrls = extraUrls.filter(url => !sitemap.includes(`<loc>${url}</loc>`));

  if (newUrls.length === 0) return; // nothing new to add

  const insert = extraUrls.map(url => `
  <url>
    <loc>${url}</loc>
    <lastmod>2025-09-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('\n');

  sitemap = sitemap.replace('</urlset>', insert + '\n</urlset>');
  sitemap = sitemap.replaceAll(`https://ronikbhaskar.github.io`, `https://ronikbhaskar.com`);

  // Pass back as Buffer instead of Readable stream
  hexo.route.set(routePath, Buffer.from(sitemap));
});

// hexo.extend.filter.register('after_generate', async function () {
//   const routePath = 'sitemap.xml'; // update if needed

//   const routes = hexo.route.list();
//   if (!routes.includes(routePath)) {
//     console.log(`Route ${routePath} not found.`);
//     return;
//   }

//   const routeStream = hexo.route.get(routePath);
//   if (!routeStream) return;

//   // Convert the RouteStream to string
//   let sitemap = '';
//   for await (const chunk of routeStream) {
//     sitemap += chunk.toString();
//   }
//   console.log(sitemap);

//   if (!sitemap.includes('</urlset>')) {
//     console.log('Sitemap does not look like valid XML.');
//     return;
//   }

//   const extraUrls = [
//     'https://username.github.io/repo1/',
//     'https://username.github.io/repo2/',
//     'https://username.github.io/repo3/demo/'
//   ];

//   const insert = extraUrls.map(url => `
//   <url>
//     <loc>${url}</loc>
//     <lastmod>2025-09-15</lastmod>
//     <changefreq>monthly</changefreq>
//     <priority>0.5</priority>
//   </url>`).join('\n');

//   sitemap = sitemap.replace('</urlset>', insert + '\n</urlset>');

//   // Write back a new Readable stream so Hexo can generate the file
//   const newStream = new Readable();
//   newStream.push(sitemap);
//   newStream.push(null);
//   hexo.route.set(routePath, newStream);
// });



// hexo.extend.filter.register('after_generate', function () {
//   const routePath = 'sitemap.xml'; // update this if your sitemap route is different

//   const routes = hexo.route.list();
//   console.log('Generated routes:', routes); // debug

//   if (!routes.includes(routePath)) {
//     console.log(`Route ${routePath} not found, skipping sitemap modification.`);
//     return;
//   }

//   const sitemapBuffer = hexo.route.get(routePath);
//   if (!sitemapBuffer) {
//     console.log('Sitemap content is empty, skipping.');
//     return;
//   }

//   let sitemap = sitemapBuffer.toString();
//   console.log(sitemapBuffer);
//   if (!sitemap.includes('</urlset>')) {
//     console.log('Sitemap does not look valid XML, skipping.');
//     return;
//   }

//   const extraUrls = [
//     'https://username.github.io/repo1/',
//     'https://username.github.io/repo2/',
//     'https://username.github.io/repo3/demo/'
//   ];

//   const insert = extraUrls.map(url => `
//   <url>
//     <loc>${url}</loc>
//   </url>`).join('\n');

//   sitemap = sitemap.replace('</urlset>', insert + '\n</urlset>');

//   hexo.route.set(routePath, sitemap);
// });


