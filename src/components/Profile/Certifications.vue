<template>
    <div id="jobs">
        <h2>Certifications</h2>
        <div class="card" v-for="certification in certifications">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-xs-12 col-sm-auto text-center">
                        <img :src="certification.icon" :alt="certification.name" class="company-logo">
                    </div>
                    <div class="col-xs-12 col-sm">
                        <h5 class="card-title">{{ certification.name }}</h5>
                        <a :href="certification.url" target="_blank" class="btn btn-outline-primary btn-sm">Access</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "certificatons",
        data: function() {
            return {
                certifications: [
                    {
                        name: 'iMasters PHP Certified Professional',
                        icon: '/static/images/certifications/imasters_php.png',
                        url: 'https://certificacao.imasters.com.br/users/rafael-mello'
                    },
                    {
                        name: 'Symfony Documentation Contributor',
                        icon: '/static/images/certifications/symfony_doc.png',
                        url: 'https://connect.sensiolabs.com/profile/merorafael'
                    }
                ]
            };
        }
    }
</script>
<style scoped>
    .card {
        margin: 10px 0;
    }

    img.company-logo {
        width: 72px;
        height: 72px;
    }
</style>
