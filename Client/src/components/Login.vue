<template>
  <div class="hello">
    <h1 class="title">{{ msg }}</h1>
    <div class="card">
      <div class="card-content">
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input class="input" type="email" placeholder="Email">
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
            <input class="input" type="password" placeholder="Password">
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item" v-on:click="$router.push('/home')">
            <a>Login</a>
        </div>
        <div class="card-footer-item" v-on:click="$router.push('/home')">
            <a>Register</a>
        </div>
      </footer>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        msg: 'Login'
      }
    }
  }

</script>