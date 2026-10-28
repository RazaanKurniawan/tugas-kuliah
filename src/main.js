import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { initAuth } from './services/auth'
import './assets/main.css'

// Hydrate authentication session before mounting
initAuth().finally(() => {
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
})
