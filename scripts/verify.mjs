import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import path from 'node:path';

const routes = ['', 'estudios', 'servicios', 'metodologia', 'acerca', 'contacto', 'estudios/mercado-001'];
for (const route of routes) {
  const html = await readFile(path.join('dist', route, 'index.html'), 'utf8');
  assert.match(html, /lang="es-MX"/);
  assert.match(html, /<h1[\s>]/);
  assert.match(html, /name="description"/);
  assert.match(html, /rel="canonical"/);
  assert.match(html, /id="contenido"/);
  assert.match(html, /property="og:image"/);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) {
    const target = decodeURIComponent(match[1]);
    await access(path.join('dist', target, target.endsWith('/') ? 'index.html' : ''));
  }
}
for (const file of ['404.html', 'robots.txt', 'sitemap-index.xml', 'sitemap-0.xml', 'favicon.svg', 'images/og.png']) await access(path.join('dist', file));
console.log(`Verificación correcta: ${routes.length} páginas, enlaces internos, recursos y archivos SEO.`);
