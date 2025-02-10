import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/task-management-app/',  // This should match your GitHub repo name
  plugins: [react()],
})
