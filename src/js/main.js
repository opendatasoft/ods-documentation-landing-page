import 'es6-promise/auto';

import Vue from 'vue';
import router from './router.js';

import init_filter from './filters';

import app from '../vue/app/app.vue';

import app__header from '../vue/app/app__header.vue';
import app__header__slideout from '../vue/app/app__header__slideout.vue';
import app__footer from '../vue/app/app__footer.vue';

import home from '../vue/home/home.vue';

import apis from '../vue/apis/apis.vue';

import boxes from '../vue/elements/boxes.vue';
import boxes_link from '../vue/elements/boxes_link.vue';
import langs from '../vue/elements/langs.vue';
import navigation from '../vue/elements/navigation.vue';

import pageNotFound from '../vue/page-not-found/page-not-found.vue';

// Scroll to top on route change
router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

/* Set up vue */
Vue.component('app__header', app__header);
Vue.component('app__header__slideout', app__header__slideout);
Vue.component('app__footer', app__footer);

Vue.component('home', home);

Vue.component('apis', apis);

Vue.component('boxes', boxes);
Vue.component('boxes_link', boxes_link);
Vue.component('langs', langs);
Vue.component('navigation', navigation);

Vue.component('page-not-found', pageNotFound);

//- Filter
init_filter();

new Vue({
    router: router,
    el: '#app',
    render: h => h(app)
});
