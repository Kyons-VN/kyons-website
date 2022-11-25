import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://kyons.vn',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'vi', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          vi: 'vi-VN', // The `defaultLocale` value must present in `locales` keys
          en: 'en-US',
        },
      },
    }),
    preact(),
    robotsTxt(),
  ],
  // base: '/website',
  // site: 'https://kyonsvn.web.app',
});
