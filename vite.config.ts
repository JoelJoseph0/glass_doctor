import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // Base path for custom domain deployment
  // Custom domain: https://theglassdoctor.ae/
  base: '/',
  
  plugins: [react(), tailwindcss()],
  resolve:{
    alias: {
      '@': path.resolve(import.meta.dirname, './src')
    }
  },

  server: {
    port: 5173,
    open: true
  }
})
