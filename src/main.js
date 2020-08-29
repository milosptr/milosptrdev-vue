import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VTooltip from 'v-tooltip'
import { VLazyImagePlugin } from "v-lazy-image"

import '@/assets/css/style.css'

Vue.config.productionTip = false
Vue.use(VTooltip)
Vue.use(VLazyImagePlugin)
Vue.prototype.axios = axios

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
