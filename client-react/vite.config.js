import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import fs from 'fs/promises';

export default defineConfig({
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx', 
      },
    },
  },
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-macros'],
      },
    }),
  ],
});
