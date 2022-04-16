import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

function pathResolve (dir) {
  return resolve(__dirname, './', dir)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false // 禁用eslint 缓存
    }),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  },
  server: {
    proxy: {
      // 选项写法
      '/admin': {
        target: 'https://elm.cangdu.org',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
