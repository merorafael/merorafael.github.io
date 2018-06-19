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
    import Social from "@/components/Profile/Social";
    import Identifier from "@/components/Profile/Identifier";
    import Certificatons from "@/components/Profile/Certifications";
    import Jobs from "@/components/Profile/Jobs";

    export default {
        name: "profile",
        components: {Jobs, Certificatons, Identifier, Social}
    }
</script>
<style scoped>
    .header {
      margin: 20px 0;
    }
</style>
