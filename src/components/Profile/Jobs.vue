<template>
    <div id="jobs">
        <h2>Jobs</h2>
        <div class="card" v-for="company in companies">
            <div class="card-body">
                <div class="row">
                    <div class="col-xs-12 col-sm-auto text-center">
                        <img :src="company.company.logo" :alt="company.company.name" class="company-logo">
                    </div>
                    <div class="col-xs-12 col-sm">
                        <h5 class="card-title">{{ company.company.name }}</h5>
                        <div v-for="(job, key) in company.jobs">
                            <h6 class="card-subtitle mb-2 text-muted">{{ job.job }}</h6>
                            <div class="text-muted">
                                <span v-if="job.startDate">
                                    {{ job.startDate.format('MMMM YYYY') }}
                                </span>
                                <span v-if="job.endDate">
                                    -
                                    {{ job.endDate.format('MMMM YYYY') }}
                                </span>
                                <span v-else>
                                    -
                                    <b>currently</b>
                                </span>
                            </div>
                            <p class="card-text">
                                {{ job.description }}
                            </p>
                            <hr v-if="key != (company.jobs.length - 1)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import companies from '@/assets/data/companies';
    import moment from 'moment'

    export default {
        name: "jobs",
        data() {
            return {
                companies: [],
            };
        },
        created() {
            if (companies instanceof Array) {
                companies.forEach((company) => {
                    if (company.jobs instanceof Array) {
                        for (let i = 0; i < company.jobs.length; i++) {
                            company.jobs[i].startDate = moment(company.jobs[i].startDate, 'MM/YYYY');
                            if (company.jobs[i].endDate) {
                               company.jobs[i].endDate = moment(company.jobs[i].endDate, 'MM/YYYY');
                            }
                        }
                    }
                    this.companies.push(company);
                });
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
