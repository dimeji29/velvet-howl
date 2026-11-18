import fs from 'node:fs';
for (const k of ['index', 'gallery', 'services', 'pricing', 'contact', 'terms']) {
  const h = fs.readFileSync('dist/' + k + '.html', 'utf8');
  const t = (h.match(/<title>([^<]*)<\/title>/) || [])[1];
  const d = (h.match(/name="description" content="([^"]*)"/) || [])[1];
  const c = (h.match(/rel="canonical" href="([^"]*)"/) || [])[1];
  const v = h.includes('google-site-verification');
  const j = (h.match(/application\/ld\+json/g) || []).length;
  const brand = (h.match(/VELVET HOWL/g) || []).length;
  console.log(k + ' | ' + t + ' | verify:' + v + ' | jsonld:' + j + ' | brand mentions:' + brand);
}
console.log('---robots---');
console.log(fs.readFileSync('dist/robots.txt', 'utf8'));
console.log('---sitemap---');
console.log(fs.readFileSync('dist/sitemap.xml', 'utf8'));
