import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './assets/base.css'
import axios from 'axios';

axios.defaults.baseURL = 'https://dog.ceo/api/breeds';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
  })

// app.use(store);
// app.use(router)
app.use(store).use(router).use(vuetify).mount('#app')
