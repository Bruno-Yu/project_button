// import { fileURLToPath } from 'url'
// import { dirname, join } from 'path'
// const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  components: [
    { path: './components', prefix: 'Ui' }
  ],
  // css: [join(currentDir, './assets/root.scss')],
})
