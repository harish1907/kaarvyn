import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // node_modules/.vite occasionally gets root-owned files written into it by
  // sandboxed tooling on this machine; keeping the cache outside node_modules
  // sidesteps that instead of fighting it.
  cacheDir: '.vite-cache-3',
})
