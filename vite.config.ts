import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include:[/\.md$/,/\.vue$/]
  }),Markdown()],
  build:{
    lib:{
      entry:path.resolve(__dirname, 'packages/index.ts'),
      name:'QUI',
      fileName:(format)=> `qui.${format}.ts`      
    },
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@import"./src/style/style.scss";`
      }
    }
  }
})
