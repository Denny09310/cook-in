import path from 'node:path';
import { defineConfig } from 'vite';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import { VitePWA as pwa } from 'vite-plugin-pwa';
import sass from 'vite-plugin-sass-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy(),
    mkcert(),
    sass(),
    pwa({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'service-worker.ts',
      devOptions: {
        enabled: true,
        type: 'module',
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          redux: ['@reduxjs/toolkit', 'react-redux', ''],
          swiper: ['swiper'],
          ionic: ['@ionic/react', '@ionic/react-router'],
        },
      },
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5297',
    },
  },
});
