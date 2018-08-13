import 'es6-promise/auto';

import Vue from 'vue';
import router from './router.js';

import app from './components/app/app.vue';

import home from './components/pages/home.vue';
import apis from './components/pages/apis.vue';
import notFound from './components/pages/not-found.vue';

// Scroll to top on route change
router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

/* Set up vue */
Vue.component('home', home);
Vue.component('apis', apis);
Vue.component('notFound', notFound);

new Vue({
    data: {
        lang: 'en'
    },
    router: router,
    el: '#app',
    render: h => h(app)
});
