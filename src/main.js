import { createApp } from 'vue'
import App from './App.vue'
import useplugins from './plugins'
import router from '@/router'

let app = createApp(App)
app.use(router)
useplugins(app)
app.mount('#app')
