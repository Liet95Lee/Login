import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import Veelidate, { Validator } from 'vee-validate'

import './local/index'

Vue.use(Veelidate)

const validator = new Validator()
validator.localize('zh-CN')

Vue.config.productionTip = false

axios.defaults.baseURL = (process.env.NODE_ENV !== 'production')
  ? 'http://localhost:3000'
  : 'http://your.domian.com'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
