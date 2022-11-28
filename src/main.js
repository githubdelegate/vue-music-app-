import { createApp } from 'vue'
import App from './App.vue'
import useplugins from './plugins'

let app = createApp(App)
useplugins(app)
app.mount('#app')
