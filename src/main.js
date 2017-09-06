// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import mintUI from 'mint-ui'
// import axios from "axios";
// import 'mint-ui/lib/style.css';
import store from './store/store'
import Vuex from 'vuex';
import http from './axios';
import $ from 'jquery';
// const Vux = require('vux')

Vue.use(Vuex);
Vue.use(http);
// Vue.use(Vux);
Vue.config.productionTip = false
// Vue.use(mintUI)
// Vue.prototype.$http = axios
/* eslint-disable no-new */
Vue.mixin({
  data(){
    return{
      self:null,
    }
  },
  created(){
    this.self=this
  },
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
router.push('index')