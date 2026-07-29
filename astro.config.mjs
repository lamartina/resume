import { defineConfig } from 'astro/config';

// Custom domain (srlamartina.com) via public/CNAME, so no `base` path is needed.
export default defineConfig({
  site: 'https://srlamartina.com',
});
