<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'App'
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
