import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/trafficLight/',  // 👈 برای GitHub Pages
  plugins: [react()],
})
