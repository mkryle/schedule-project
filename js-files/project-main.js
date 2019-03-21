
// import VueRouteTimeline from 'vue-route-timeline';

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router'
import store from './store'
// import FullCalendar from 'vue-full-calendar'
import 'bulma/css/bulma.css'

Vue.use(VueRouter);


new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
})
