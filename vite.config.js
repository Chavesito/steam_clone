import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "https://Chavesito.github.io/steam_clone",
  server: {
    proxy: {
      // Proxy para /store-api
      '/store-api': {
        target: 'https://store.steampowered.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/store-api/, ''),
      },
      // Proxy para /api
      '/api': {
        target: 'https://api.steampowered.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
