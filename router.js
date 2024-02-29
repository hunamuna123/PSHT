import { createRouter, createWebHashHistory} from 'vue-router';
import AdminVue from './Admin.vue';


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/admin', component: AdminVue},
    ]
})