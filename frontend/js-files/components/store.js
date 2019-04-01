import Vue from 'vue'
var baseServerUrl = 'http://localhost:7000';
export default {
  state: {
    accessToken:  localStorage.getItem('access_token') ||  '',
    currentUser : {},
    // admins:[
    //   {
    //     username: 'admin',
    //     password: 'admin'
    //   }
    // ]
  },
  actions:{
  //   login (state,admin) {
  //   state.commit('LOGIN',admin)
  // }
  },
  mutations: {
//     LOGIN(state,res){
//
//
//         if(state.admins.username === res.username){
//             if(state.admins.password === res.password){
//                 state.seccLogin = 1
//             }
//         }
//
// }
  },
  getters:{

  }
};
