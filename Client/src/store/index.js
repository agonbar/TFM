import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import patients from './modules/patients'
import socket from './modules/socket'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    socket,
    users,
    patients
  },
  strict: debug
})