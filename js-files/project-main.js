
// import store from './store'
// import VueRouteTimeline from 'vue-route-timeline';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router'
import 'bulma/css/bulma.css'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
