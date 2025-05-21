import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: '/traffic-light/',  // 👈 برای GitHub Pages
  plugins: [react()],
})
