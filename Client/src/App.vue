<template>
  <div id="app">
    <a href="#/"><img src="./assets/logo.png"></a>
    <div class="container">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script> 