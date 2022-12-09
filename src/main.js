import { createApp } from 'vue'
import App from './App.vue'
import useplugins from './plugins'
import router from '@/router'
import store from '@/store'

let app = createApp(App)
app.use(store)
app.use(router)
useplugins(app)
app.mount('#app')
