import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // ← CHANGÉ de 3000 à 5173
    host: true,   // Permet l'accès depuis l'extérieur du container
    proxy: {
      '/api': { 
        target: 'http://localhost:5001',  // ou 'http://backend:5001' pour Docker
        changeOrigin: true 
      },
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
})
