// @ts-nocheck


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // Allow @/ to point to your library source
      '@': resolve(__dirname, '../src'),
    },
  },
  server: {
    port: 5174,
    open: true,
  },
})
