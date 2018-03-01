<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <div class="card">
      <div class="card-content">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input v-model="newUser.email" class="input" type="email" placeholder="Email">
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input v-model="newUser.password" class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item" v-on:click="login(newUser)">
          <!--<div class="card-footer-item" v-on:click="$router.push('/home')">-->
          <a>Login</a>
        </div>
        <div class="card-footer-item" v-on:click="$router.push('/home')">
          <a>Register</a>
        </div>
      </footer>
    </div>
    <transition name="fade">
      <div class="notification is-danger" v-if="user.status == 'error'">
        Wrong email or password.
      </div>
    </transition>
    <div class="modal is-activee">
      <div class="modal-background"></div>
      <div class="modal-content">
        <progress class="progress is-primary" value="15" max="100">30%</progress>
      </div>
    </div>

  </div>

</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'Login',
    data() {
      return {
        msg: 'Login',
        newUser: {}
      }
    },
    methods: mapActions([
      'login'
    ]),
    computed: mapGetters({
      user: 'thisUser'
    }),
  }

</script>
