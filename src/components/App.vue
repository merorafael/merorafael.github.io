<template>
    <div id="app" class="container">
        <profile></profile>
        <certificatons></certificatons>
        <jobs></jobs>
    </div>
</template>
<script>
    import Profile from "./Profile.vue";
    import Jobs from "./Jobs";
    import Certificatons from "./Certifications";

    export default {
        name: 'app',
        components: {
            Certificatons,
            Jobs,
            Profile
        }
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
