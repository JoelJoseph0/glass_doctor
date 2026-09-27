import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  // Base path for GitHub Pages deployment
  // For repository: https://joeljoseph0.github.io/glass_doctor/
  // Change to '/' when using custom domain theglassdoctor.ae
  base: '/glass_doctor/',
  
  plugins: [react(), tailwindcss()],
  resolve:{
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  server: {
    port: 5173,
    open: true
  }
})
