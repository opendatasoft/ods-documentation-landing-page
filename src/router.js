import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './components/pages/home.vue';
import apis from './components/pages/apis.vue';
import notFound from './components/pages/not-found.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/en/home'
        },
        {
            path: '/:lang',
            redirect: '/:lang/home'
        },
        {
            path: '/:lang/home',
            name: 'home',
            component: home
        },
        {
            path: '/:lang/apis',
            name: 'apis',
            component: apis
        },
        {
            path: '/:lang/*',
            name: 'notFound',
            component: notFound
        }
    ],
    linkActiveClass: "active"
});