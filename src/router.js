import Vue from 'vue';
import VueRouter from 'vue-router';

import home from './components/pages/home.vue';
import apis from './components/pages/apis.vue';
import notFound from './components/pages/not-found.vue';

Vue.use(VueRouter);

const localizedURL = path => `/:lang(fr|en|es|de|nl)/${path}`

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/en/home'
        },
        {
            path: localizedURL(''),
            redirect: '/:lang/home'
        },
        {
            path: localizedURL('home'),
            name: 'home',
            component: home
        },
        {
            path: localizedURL('apis'),
            name: 'apis',
            component: apis
        },
        {
            path: localizedURL('*'),
            name: 'localizedNotFound',
            component: notFound
        },
        {
            path: '*',
            name: 'notFound',
            component: notFound
        }
    ],
    linkActiveClass: "active"
});