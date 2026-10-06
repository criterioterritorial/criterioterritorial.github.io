import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://criterioterritorial.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // Keep this CommonJS dependency external to the content module runner on Windows.
  vite: { ssr: { external: ['picomatch'] } },
});
