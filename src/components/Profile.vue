<template>
    <div id="profile">
        <div class="row align-items-center header">
          <div class="col-sm-6">
              <identifier></identifier>
          </div>
          <div class="col-sm-6 text-right">
              <social></social>
          </div>
        </div>
        <certificatons></certificatons>
        <jobs></jobs>
    </div>
</template>
<script>
    import Certificatons from "./Profile/Certifications";
    import Jobs from "./Profile/Jobs";
    import Social from "./Profile/Social";
    import Identifier from "./Profile/Identifier";

    export default {
      name: "profile",
      components: {Identifier, Social, Jobs, Certificatons},
    }
</script>
<style scoped>
    .header {
      margin: 20px 0;
    }
</style>
