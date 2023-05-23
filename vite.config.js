import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root),
        contact: resolve(root, 'contact', 'index.html'),
        price: resolve(root, 'price', 'index.html'),
        service: resolve(root, 'service', 'index.html'),
        about: resolve(root, 'pages', 'about.html')
      }
    }
  },
})