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
      servers: state => {
        return state.servers;
      }
    },
    mutations: {
      SET_USER(state, payload) {
        state.user = payload;
      },
      SET_SERVER(state, { server }) {
        console.log(server);
        state.servers = { ...state.servers, [server.id]: server.data() };
      },
      FUCKO(state, { server }) {
        state.server;
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
      },
      updateServer({ commit }, payload) {
        console.log("Nu är vi i storen. letar efter " + payload.server);
        for (let s in this.state.servers) {
          if (this.state.servers[s].name === payload.server) {
            console.log(
              `Ska spara: ${payload.branch} ${payload.user} ${payload.comment}`
            );
            StoreDB.collection("servrar")
              .doc(s)
              .set({
                name: payload.server,
                comment: payload.comment,
                branch: payload.branch,
                user: payload.user
              })
              .then(() => console.log("Lyckades spara!"))
              .catch(() => console.error("Något gick fel"));
          }
        }
      }
    }
  });
};

export default createStore;
