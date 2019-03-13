import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import 'bulma/css/bulma.css'

new Vue({
  store,
  el: '#app',
  render: h => h(App)
})
