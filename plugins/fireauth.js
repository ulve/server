import { auth } from "@/services/fireinit.js";

export default context => {
  const { store } = context;

  return new Promise(resolve => {
    auth.onAuthStateChanged(user => {
      if (user) {
        return resolve(store.commit("SET_USER", user));
      }
      return resolve();
    });
  });
};
