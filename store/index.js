import Vuex from "vuex";
import firebase, { auth } from "@/services/fireinit.js";
import { firebaseMutations } from "vuexfire";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null
    },
    getters: {
      activeUser: state => {
        return state.user;
      }
    },
    mutations: {
      setUser(state, payload) {
        state.user = payload;
      },
      ...firebaseMutations
    },
    actions: {
      signInWithEmail(payload) {
        return auth.signInWithEmailAndPassword(payload.email, payload.password);
      },
      signOut({ commit }) {
        auth
          .signOut()
          .then(() => {
            commit("setUser", null);
          })
          .catch(err => console.log(err));
      }
    }
  });
};

export default createStore;
