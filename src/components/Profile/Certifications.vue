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
    import certifications from "@/assets/data/certifications";

    export default {
        name: "certificatons",
        data() {
            return {
                certifications: []
            };
        },
        created() {
            if (certifications instanceof Array) {
                this.certifications = certifications;
            }
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
