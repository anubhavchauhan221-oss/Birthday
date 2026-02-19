import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Replace 'Birthday' with your exact repository name if it's different
  base: '/Birthday/', 
  plugins: [react()],
})