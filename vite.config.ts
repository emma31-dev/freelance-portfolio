import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react({
      // Only include JSX runtime, not the full React dev tools
      jsxRuntime: 'automatic',
    }),
    tailwindcss()
  ],
  build: {
    // Enable tree-shaking and dead code elimination
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
      },
    },
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks
          vendor: ['react', 'react-dom'],
          emailjs: ['@emailjs/browser'],
        },
      },
    },
    // Enable source map for debugging but optimize for production
    sourcemap: false,
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', '@emailjs/browser'],
    exclude: ['@vite/client', '@vite/env'],
  },
  server: {
    port: 3000,
    open: true
  }
})