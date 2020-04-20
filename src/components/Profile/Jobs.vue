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
    import moment from 'moment'

    export default {
        name: "jobs",
        data: function() {
            return {
                companies: [
                    {
                        company: {
                            name: 'M4U',
                            logo: '/static/images/companies/m4u.png'
                        },
                        jobs: [
                            {
                                job: 'Software Engineer',
                                description: '',
                                startDate: moment('04/2020', 'MM/YYYY'),
                                endDate: null
                            }
                        ]
                    },
                    {
                        company: {
                            name: 'Ame Digital',
                            logo: '/static/images/companies/ame.png'
                        },
                        jobs: [
                            {
                                job: 'Software Engineer',
                                description: '',
                                startDate: moment('01/2019', 'MM/YYYY'),
                                endDate: moment('04/2020', 'MM/YYYY')
                            }
                        ]
                    },
                    {
                        company: {
                            name: 'B2W Digital',
                            logo: '/static/images/companies/b2w.png'
                        },
                        jobs: [
                            {
                                job: 'Software Engineer',
                                description: '',
                                startDate: moment('01/2017', 'MM/YYYY'),
                                endDate: moment('04/2020', 'MM/YYYY')
                            }
                        ]
                    },
                    {
                        company: {
                            name: 'Funcional Health Tech (Fidelize)',
                            logo: '/static/images/companies/fidelize.png'
                        },
                        jobs: [
                            {
                                job: 'Senior Software Developer',
                                description: '',
                                startDate: moment('05/2016', 'MM/YYYY'),
                                endDate: moment('12/2016', 'MM/YYYY')
                            }
                        ]
                    },
                    {
                        company: {
                            name: 'Zoox Media & Connectivy',
                            logo: '/static/images/companies/zoox.png'
                        },
                        jobs: [
                            {
                                job: 'Development Coordinator',
                                description: '',
                                startDate: moment('11/2014', 'MM/YYYY'),
                                endDate: moment('05/2016', 'MM/YYYY')
                            },
                            {
                                job: 'Software Developer',
                                description: '',
                                startDate: moment('09/2011', 'MM/YYYY'),
                                endDate: moment('11/2014', 'MM/YYYY')
                            }
                        ]
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
