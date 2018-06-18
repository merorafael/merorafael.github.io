import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/fontawesome-all.min.css'
import './assets/css/animate.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './components/App.vue'

Vue.use(BootstrapVue);

new Vue({
    el: '#app',
    render: h => h(App)
});
