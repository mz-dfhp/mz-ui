import { createApp } from 'vue'
import Mzui from 'mz-ui'
import '@mz-ui/theme-chalk/src/index.scss'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Mzui, {
  namespace: 'mz',
  locale: {
    locale: 'zh-CN'
  }
})
app.mount('#app')
