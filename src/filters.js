import Vue from 'vue';

export default function () {
    /* Filters */
    Vue.filter('limitTo', function (string, max) {
        return (string.length > max) ? string.substr(0, max - 1) + '…' : string;
    });
}