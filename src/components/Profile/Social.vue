<template>
    <div id="social_profiles">
        <a v-for="profile in profiles"
           :href="profile.url"
           target="_blank"
           v-b-tooltip.hover.bottom="profile.name"
           class="btn btn-link social-icon">
            <i :class="profile.icon"></i>
        </a>
    </div>
</template>
<script>
    import profiles from '@/assets/data/social_profiles.json';

    export default {
        data() {
            return {
                profiles: []
            };
        },
        created() {
            if (profiles instanceof Array) {
                this.profiles = profiles;
            }
        }
    }
</script>
<style scoped>
    #social_profiles {
        display: inline-block;
    }

    .social-icon {
        font-size: 2em;
    }
</style>
