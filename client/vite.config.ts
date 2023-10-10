/// <reference types="vitest" />

import { defineConfig } from 'vite';
import path from 'node:path';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import pwa from './vite.config.pwa';
import sass, { css } from './vite.config.sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy(), mkcert(), sass(), pwa()],
  css,
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
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
});
