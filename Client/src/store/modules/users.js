import router from "../../router/index.js"

// initial state
const state = {
  user: {
    isLoggedIn: false,
    loginFailed: false,
    token: ''
  }
}
// getters
const getters = {
  thisUser: state => state.user
}
// actions
const actions = {
  getThisUser (context) {
    state.user;
  },
  login (context, data) {
      context.commit('NEW_TRY');
      if (state.user.token != '') { data = {auth: state.user.token}};
      context.dispatch('sendSocket', {POST: data});
  }
}

// mutations
const mutations = {
  NEW_TRY(state) {
    state.user.loginFailed = false;
    state.user.token = '';
  },
  LOGIN_SUCCESS(state, response) {
    state.user.isLoggedIn = true;
    state.user.token = response.token;
    router.push('/home');
  },
  LOGIN_ERROR(state, response) {
    state.user.isLoggedIn = false;
    state.user.token = '';
    state.user.loginFailed = true;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}