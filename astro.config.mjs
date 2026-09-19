// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://sewagitarjakarta.jdanwmusic.workers.dev',
  output: 'static',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
});
