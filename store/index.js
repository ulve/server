import Vuex from "vuex";
import firebase, { auth } from "@/services/fireinit.js";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    getters: {
      activeUser: (state, getters) => {
        return state.user;
      }
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload;
      }
    },
    actions: {
      signInWithEmail({ commit }, payload) {
        return auth.signInWithEmailAndPassword(payload.email, payload.password);
      },
      signOut({ commit }) {
        auth
          .signOut()
          .then(() => {
            commit("setUser", null);
          })
          .catch(err => console.log(error));
      }
    }
  });
};

export default createStore;
