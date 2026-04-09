import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: [
      '4d4a-177-38-36-170.ngrok-free.app'
    ],
    proxy: {
      '/giros': {
        target: 'http://192.168.100.190:8080',
        changeOrigin: true,
      }
    }
  }
})