<template>
    <div id="profile" class="row align-items-center">
        <div class="col-sm-6">
            <identifier></identifier>
        </div>
        <div class="col-sm-6 text-right">
            <social></social>
        </div>
    </div>
</template>
<script>
    import Social from "./Profile/Social";
    import Identifier from "./Profile/Identifier";
    export default {
        name: "profile",
        components: {Identifier, Social}
    }
</script>
<style scoped>
    #profile {
        margin: 20px 0;
    }
</style>