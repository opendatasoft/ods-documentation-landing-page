import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../vue/home/home.vue';
import apis from '../vue/apis/apis.vue';
import pageNotFound from '../vue/page-not-found/page-not-found.vue';

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
            path: '/:lang/404',
            name: 'page-not-found',
            component: pageNotFound
        },
        {
            path: '*',
            redirect: '/en/404'
        }
    ],
    linkActiveClass: "active"
});