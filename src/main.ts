import { createApp } from 'vue'
// import './style.css'
import QUI from '../packages/index'
import App from './App.vue'
import router from './router'
// import QUI from 'qui-ts'
import '../node_modules/qui-ts/dist/style.css'
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);

const app = createApp(App);
app.use(hljsVuePlugin)
app.use(QUI)
app.use(router)
app.mount('#app')

