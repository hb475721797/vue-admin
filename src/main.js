import Vue from 'vue'
import App from './App.vue'

import 'normalize.css' // css 重置工具
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from "./router";


Vue.config.productionTip = false

Vue.use(ElementUi)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
