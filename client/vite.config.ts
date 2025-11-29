import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
    server: {
    host: true,
    port: 3000,
    strictPort: false,
    allowedHosts: [
      'localhost',
      '.ngrok-free.app',
      '13c7f6c75707.ngrok-free.app',
    ],
  },
})
