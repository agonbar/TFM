// initial state
const state = {
    socket: {
      isConnected: false,
      message: '',
      reconnectError: false,
    }
}

// actions
const actions = {
    sendSocket ({ commit }, data) {
        data.token = this.getters.thisUser.token;
        this._vm.$socket.sendObj(data);
    }
}

// mutations
const mutations = {
    SOCKET_ONOPEN (state, event)  {
        state.socket.isConnected = true;
        if(this.getters.thisUser.token != '') {
            this._vm.$socket.sendObj({GET: "data", token: this.getters.thisUser.token});
        }
    },
    SOCKET_ONCLOSE (state, event)  {
        state.socket.isConnected = false
    },
    SOCKET_ONERROR (state, event)  {
        console.error(state, event)
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE (state, message)  {
        console.log(message);
        state.message = message;
    },
    SOCKET_RECONNECT (state, event)  {
        state.socket.isConnected = true
    }
  }

  export default {
    state,
    actions,
    mutations
  }