import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Terminal from 'vite-plugin-terminal'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Terminal(),
    react()
  ]
})
