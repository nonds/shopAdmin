import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import './styles/index.scss'
import elementPlus from './plugins/element-plus'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(elementPlus)
app.mount('#app')
