import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VTooltip from 'v-tooltip'
import { VLazyImagePlugin } from "v-lazy-image"

import '@/assets/css/style.css'

Vue.config.productionTip = false
Vue.use(VTooltip)
Vue.use(VLazyImagePlugin)


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
