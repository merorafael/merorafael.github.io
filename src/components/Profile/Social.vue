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
    export default {
        data: function() {
            return {
                profiles: [
                    {
                        name: 'GitHub',
                        url: 'https://github.com/merorafael',
                        icon: 'fab fa-github'
                    },
                    {
                        name: 'LinkedIn',
                        url: 'https://br.linkedin.com/in/merorafael',
                        icon: 'fab fa-linkedin'
                    },
                    {
                        name: 'Telegram',
                        url: 'https://telegram.me/merorafael',
                        icon: 'fab fa-telegram'
                    },
                    {
                        name: 'Medium',
                        url: 'https://medium.com/@merorafael',
                        icon: 'fab fa-medium'
                    }
                ]
            };
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