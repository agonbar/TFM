// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueNativeSock from 'vue-native-websocket'

import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

// Require the main Sass manifest file
require('./assets/sass/main.scss');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.use(VueNativeSock, 'ws://localhost:3000', { 
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 3000,
  store: store,
  format: 'json'
})

Vue.use(VueChartkick, { Chartkick })