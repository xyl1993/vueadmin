import Vue from 'vue';
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import axios from 'axios';
import App from './app.vue';
import 'element-ui/lib/theme-chalk/index';
// import '../assets/theme/theme-darkblue/index.css'
import VueRouter from 'vue-router';
import routes from './app-routes';
import store from './vuex/store'
import 'font-awesome/css/font-awesome.min.css';

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'vueAdmin';
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')