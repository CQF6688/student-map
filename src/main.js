import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueBingMaps from 'vue-bing-maps'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);
Vue.use(VueBingMaps);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
