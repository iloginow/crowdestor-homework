import Vuex from 'vuex';
import Vue from 'vue';

import auth from './auth';
import userManagement from './user-management';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    userManagement,
  },
});
