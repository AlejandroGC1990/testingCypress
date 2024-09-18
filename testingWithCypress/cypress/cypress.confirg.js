import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {},
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173'
  },
});
