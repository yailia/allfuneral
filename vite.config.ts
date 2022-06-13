import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth": {
        target: "http://135.181.35.61:2112/",
        secure: false,
        changeOrigin: true, 
      } ,
      }
    }
  }
)
