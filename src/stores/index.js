import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Login from "./Login";
import Pelajar from "./Pengguna/Pelajar";

export default new Vuex.Store({
  modules: {
    login: Login,
    pelajar: Pelajar,
  },
  state: {
    user: {},
    isDefaultPass: "",
    showsidebar: true,
  },
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).map((item) => {
        state[item] = payload[item];
      });
    },
  },
  actions: {
  },
});
