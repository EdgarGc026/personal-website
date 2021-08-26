import Vue from "vue";
import Vuex from "vuex";
import api from "@/api";
Vue.use(Vuex);

//Configurando store
export default new Vuex.Store({
  state: {
    params: [],
    aboutParams: [],
    frontendParams: [],
  },

  mutations: {
    setParams(state, payload) {
      state[payload.state] = payload.params;
    },
  },

  actions: {
    changeSpanish() {
      api.getHeroSpanishData().then((params) =>
        this.commit("setParams", {
          params,
          state: "params",
        })
      );

      api.getAboutMeSpanishData().then((params) =>
        this.commit("setParams", {
          params,
          state: "aboutParams",
        })
      );

      api.getFrontendSpanishData().then((params) =>
        this.commit("setParams", {
          params,
          state: "frontendParams",
        })
      );
    },

    initEnglish() {
      api.getHeroData().then((params) =>
        this.commit("setParams", {
          params,
          state: "params",
        })
      );
      api.getAboutMeData().then((params) =>
        this.commit("setParams", {
          params,
          state: "aboutParams",
        })
      );
      api.getFrontendData().then((params) =>
        this.commit("setParams", {
          params,
          state: "frontendParams",
        })
      );
    },
  },
});
