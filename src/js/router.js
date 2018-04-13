import Vue from 'vue';
import VueRouter from 'vue-router';

import home from '../components/pages/home.vue';
import apis from '../components/pages/apis.vue';
import notFound from '../components/pages/not-found.vue';

import { navigatorLang } from './util';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/' + navigatorLang() + '/home'
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
            name: 'notFound',
            component: notFound
        },
        {
            path: '*',
            redirect: '/en/404'
        }
    ],
    linkActiveClass: "active"
});