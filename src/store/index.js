import { createStore } from "vuex";

export default createStore({
  state: {
    // Used to check if user is logged in or not.
    loggedIn: false
  },
  mutations: {
    // Change the user's login status
    changeLoginStatus(state) {
      state.loggedIn = !state.loggedIn;
    }
  },
  actions: {},
  modules: {}
});
