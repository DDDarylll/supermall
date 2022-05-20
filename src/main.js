import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

//本来没有$bus,用于图片加载完毕,不会出现scrollHeight BUG
Vue.prototype.$bus = new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
