import Vuex from "vuex";
import firebase, { auth, StoreDB } from "@/services/fireinit.js";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      servers: {}
    },
    getters: {
      activeUser: state => {
        return state.user;
      },
      servers2: state => {
        return state.servers;
      }
    },
    mutations: {
      c(state, payload) {
        state.user = payload;
      },
      SET_SERVER(state, { server }) {
        console.log(server);
        state.servers = { ...state.servers, [server.id]: server.data() };
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
            commit("SET_USER", null);
          })
          .catch(err => console.log(err));
      },
      getServers({ commit }) {
        let serverRef = StoreDB.collection("servrar");
        serverRef.onSnapshot(snap => {
          console.log(snap);
          snap.forEach(server => commit("SET_SERVER", { server }));
        });
      }
    }
  });
};

export default createStore;
