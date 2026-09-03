import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://emamut.netlify.app/',

  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    icon(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});