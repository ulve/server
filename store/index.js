import Vuex from "vuex";
import { auth, StoreDB } from "@/services/fireinit.js";

const createStore = () => {
  return new Vuex.Store({
    state: {
      user: null,
      servers: {}
    },
    getters: {
      activeUser: state => state.user,
      servers: state => state.servers
    },
    mutations: {
      SET_USER: (state, payload) => (state.user = payload),
      SET_SERVER: (state, { server }) =>
        (state.servers = { ...state.servers, [server.id]: server.data() })
    },
    actions: {
      signInWithEmail: (_, payload) =>
        auth.signInWithEmailAndPassword(payload.email, payload.password),
      signOut: ({ commit }) =>
        auth
          .signOut()
          .then(() => {
            commit("SET_USER", null);
          })
          .catch(err => console.log(err)),
      getServers: ({ commit }) => {
        let serverRef = StoreDB.collection("servrar");
        serverRef.onSnapshot(snap => {
          snap.forEach(server => commit("SET_SERVER", { server }));
        });
      },
      updateServer: ({ state }, payload) => {
        for (let s in state.servers) {
          if (state.servers[s].name === payload.server) {
            StoreDB.collection("servrar")
              .doc(s)
              .set({
                name: payload.server,
                comment: payload.comment,
                branch: payload.branch,
                user: payload.user
              })
              .catch(() => console.error("Något gick fel"));
          }
        }
      }
    }
  });
};

export default createStore;
