import Vue from 'vue'
var baseServerUrl = 'http://localhost:7000';
export default {
  state: {
    accessToken:  localStorage.getItem('access_token') ||  '',
    currentUser : {}
  },
  actions:{
    LOGIN(state,res){

        state.admin.forEach(function(eee) {
            if(eee.username === res.username){
                if(eee.password === res.password){
                    state.inLoggat = 1
                }
            }
        }, this);
      }
  },
  mutations: {
    login ({commit},user) {
        commit('LOGIN',user)
      }
  },
  getters:{

  }
};
