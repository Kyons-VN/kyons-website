import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import sitemap from '@astrojs/sitemap';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'vi', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: 'en-US', // The `defaultLocale` value must present in `locales` keys
          vi: 'vi-VN',
        },
      },
    }),
    preact(),
  ],
  // base: '/website',
  // site: 'https://kyonsvn.web.app',
});
