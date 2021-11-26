import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//每五十分钟刷新token
let timer = null;

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    //设置用户
    SET_USER(state, val) {
      state.user = val;
    },
    //设置token
    SET_TOKEN(state, val) {
      state.token = val;
    },
    //重置登录状态
    RESET_USER(state) {
      state.user = null;
      state.token = null;
      sessionStorage.clear();
    },
  },
  actions: {
    // async refreshToken({ commit, dispatch }) {
    //   clearTimeout(timer);
    //   let res = await http.post("/token/refresh");
    //   if (res.code === 0) {
    //     sessionStorage.setItem("token", res.data.token);
    //     commit("SET_TOKEN", res.data.token);
    //     commit("SET_USER", {
    //       userName: res.data.username,
    //       userId: res.data.userId,
    //     });
    //     setTimeout(() => {
    //       dispatch("refreshToken");
    //     }, 1000 * 60 * 50);
    //   } else {
    //     commit("RESET_USER");
    //   }
    // },
  },
  modules: {},
});
