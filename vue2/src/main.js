import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview';//新增
import 'iview/dist/styles/iview.css';//新增

Vue.use(iView);//新增
import axios from 'axios'
Vue.use(ElementUI)
// 配置请求跟路径
axios.defaults.baseURL=''
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
