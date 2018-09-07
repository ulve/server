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
      setUser(state, payload) {
        state.user = payload;
      },
      setServer(state, { server }) {
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
            commit("setUser", null);
          })
          .catch(err => console.log(err));
      },
      async getServers({ commit }) {
        let serverRef = StoreDB.collection("servrar");
        let servers = await serverRef.get();
        servers.forEach(server => commit("setServer", { server }));
      }
    }
  });
};

export default createStore;
