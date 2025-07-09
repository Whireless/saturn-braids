import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // base: '/saturn-braids', // Github
  base: '/', // Хостинг
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
        api: 'modern-compiler',
      },
    },
  },
  plugins: [
    vue(),
    ViteImageOptimizer({
      jpg: {
        quality: 55,
      },
      jpeg: {
        quality: 65,
      },
    }),
    createSvgSpritePlugin({
      svgFolder: 'src/icons',
      transformIndexHtmlTag: {
        injectTo: 'body',
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
