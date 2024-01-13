import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
    rollupOptions: {
      external: ['babel-plugin-macros'],
    },
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    REPO_READ_ACCESS_TOKEN: JSON.stringify(process.env.REPO_READ_ACCESS_TOKEN),
  },
});
