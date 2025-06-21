import "./styles/main.scss"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { initKeycloak } from "./plugins/keycloak/keycloak"

const app = createApp(App)
const keycloak = await initKeycloak();

app.config.globalProperties.$keycloak = keycloak


app.use(createPinia())
app.use(router)

app.mount('#app')
