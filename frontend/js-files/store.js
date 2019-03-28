import Vue from 'vue';
import Vuex from 'vuex';

import user from './components/user/store';
import admin from './components/admin/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    admin,
  }
});
