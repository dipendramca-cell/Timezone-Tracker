import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from /Timezone-Tracker/.
  base: '/Timezone-Tracker/',
  plugins: [react(),tailwindcss()],
})
