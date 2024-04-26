import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // base: '/saturn-braids', // Github
  server: {
    open: true,
  },
  build: {
    outDir: './build',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/sass/variables.scss";`,
      },
    },
  },
  plugins: [
    vue(),
    ViteImageOptimizer({
      jpg: {
        quality: 60,
      },
      jpeg: {
        quality: 70,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
