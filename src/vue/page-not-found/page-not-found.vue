<template>
    <div class="page-not-found__wrapper">
        <div class="page-not-found__404">
            404
        </div>
        <div class="page-not-found__text">
            {{ content_page_not_found.message404[globalState.lang] }}
        </div>
        <router-link to="/" class="page-not-found__get-back-link">
            {{ content_page_not_found.backHome[globalState.lang] }}
        </router-link>
    </div>
</template>

<script>
import { setMetas } from '../../js/util';
import { mapGetters } from 'vuex'

export default {
    name: 'page-not-found',
    computed: {
        ...mapGetters([
            'globalState',
            'metas',
            'content_page_not_found'
        ])
    },
    methods: {
        setPageNotFoundMetas: function () {
            setMetas({
                title:         this.metas.page_not_found.title[this.globalState.lang],
                description:   this.metas.page_not_found.description[this.globalState.lang],
                image:         '',
                lang:          this.globalState.lang
            });
        }
    },
    beforeRouteEnter (to, from, next) {
        if (from.name === 'resourceDetails') {
            next((vm) => {
                vm.setPageNotFoundMetas();
                history.replaceState(null, null, from.fullPath);
            });
        } else {
            next((vm) => {
                vm.setPageNotFoundMetas();
            });
        }
    },
    beforeRouteUpdate (to, from, next) {
        this.$emit('event_set_lang', to.params.lang);
        next();
    }
}
</script>

<style lang='less'>

</style>
