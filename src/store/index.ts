import Vue from 'vue';
import Vuex from 'vuex';
// modules
import USER from './module/user'
import APP from './module/app'
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    USER,
    APP
  }
})
