import path from 'node:path';
import { defineConfig } from 'vite';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import sass from 'vite-plugin-sass-dts';
import pwa from './vite.config.pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy(), mkcert(), sass(), pwa()],
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
        manualChunks: (id) => {
          if (/@ionic|@stencil/i.test(id)) return 'ionic';
          if (/redux|rtk/i.test(id)) return 'redux';
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
