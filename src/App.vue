<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import Profile from "./components/Profile";

  export default {
    name: 'App',
    components: {Profile}
  }
</script>
<style>
  html, body {
    height: 100%;
  }

  body {
    background-color: #EFEFEF;
    animation-name: fadeIn;
    animation-duration: 800ms;
    animation-fill-mode: both;
  }

  #app {
    padding-top: 20px;
  }
</style>
