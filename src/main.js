import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { vuetify } from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import VueCookies from 'vue-cookies'


createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .use(VueCookies)
  .mount('#app')
