import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'Admin Page'
  },
  modules: {
  user,
  admin
},
  mutations: {},
  actions: {},
  getters: {
    title(){
      return store.getters.title
    },


  }
})

export default store
