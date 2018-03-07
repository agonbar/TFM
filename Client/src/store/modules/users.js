import router from "../../router/index.js"

// initial state
const state = {
  user: {
    token: localStorage.getItem('user-token') ||  '',
    status: '',
  }
}
// getters
const getters = {
  thisUser: state => state.user,
  isAuthenticated: state => !!state.user.token,
  authStatus: state => state.user.status
}
// actions
const actions = {
  login (context, data) {
      context.commit('NEW_TRY');
      context.dispatch('sendSocket', {POST: data});
  }
}

// mutations
const mutations = {
  NEW_TRY(state) {
    state.user.status = 'loading';
    state.user.token = '';
  },
  LOGIN_SUCCESS(state, response) {
    state.user.status = 'loggedIn';
    state.user.token = response.token;
    localStorage.setItem('user-token',response.token);
    router.push('/home');
  },
  LOGIN_ERROR(state, response) {
    state.user.status = 'error';
    state.user.token = '';
    router.push('/');
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}