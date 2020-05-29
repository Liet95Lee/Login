import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Veelidate, { Validator } from 'vee-validate'
// method 1
// import zh from 'vee-validate/dist/locale/zh_CN'

// method 2
import './local/index'

Vue.use(Veelidate)
// method 1
// Validator.localize('zh-CN', zh)

const validator = new Validator()
validator.localize('zh-CN')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
