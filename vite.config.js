import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/saturn-braids', // Github
  // base: '/', // Хостинг
  server: {
    open: true,
  },
  build: {
    outDir: './build',
  },
  plugins: [
    vue(),
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
