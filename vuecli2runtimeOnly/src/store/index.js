import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

let Pairs = "hello";

let store = new Vuex.Store({
  state: {
    username: "小恩",
    count: 0
  },
  mutations: {
    [Pairs](state, payload) {
      // console.log("成员", state);
      // console.log("负荷", payload);
      console.log("mutations:", state, payload);
    },
    getAge(state, payload) {
      console.log("成员", state);
      console.log("负荷", payload);
    }
  },
  getters: {
    getName(state, getters) {
      console.log("state:username", state.username);
      console.log("getters", getters);
      return getters.codewhy + "GOOD";
    },
    codewhy() {
      return "codewhy";
    }
  },
  actions: {
    yong(context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit(Pairs, { age: 123 });
        }, 1000);
        context.state.count++;
        console.log("state.count:", context.state.count);
        resolve(payload);
      });
    },
    good({ commit }, payload) {
      commit(Pairs, 123);
    }
  },
  modules: {
    types: {
      state: {
        name: 123
      },
      mutations: {
        birth(state, payload) {
          console.log("state", state);
        }
      }
    }
  }
});

export default store;
