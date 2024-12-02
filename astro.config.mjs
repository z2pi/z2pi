import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://yourusername.github.io',  // Replace with your GitHub username
  base: '/your-repo-name',  // Replace with your repository name
});