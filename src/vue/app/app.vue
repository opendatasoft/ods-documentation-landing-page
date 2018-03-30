<template>

    <div>
        <app__header
            :content="content_app"
            :lang="globalState.lang"
            :isOpen="slideOut"
            @open_slide_out_app="openSlideOut"
            @close_slide_out_app="closeSlideOut">
        </app__header>
        <div class="ods-wrapper">
            <router-view @event_set_lang="setLang">
            </router-view>
        </div>
        <app__footer></app__footer>
    </div>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'app',
    data : function() {
        return {
            slideOut : false
        }
    },
    computed: {
        ...mapGetters([
            'globalState',
            'content_app'
        ])
    },
    methods: {
        /* SlideOut mobile */
    //    openSlideOut() {
    //         this.slideOut = true;
    //     },
    //     closeSlideOut() {
    //         this.slideOut = false;
    //     },
    //     setLang(value) {
    //         this.$store.dispatch('set_lang', value);
    //         document.documentElement.setAttribute('lang', value);
    //         //- Resources for footer
    //         this.$store.dispatch('load_resources_footer');
    //     }
    },
    created: function() {
        // if (['en', 'fr'].indexOf(this.$route.params.lang) >= 0) {
        //     //- Dispatch load content trad in the store
        //     this.$store.dispatch('load_store_content');
        //     this.setLang(this.$route.params.lang);
        // } else {
        //     this.setLang('en');
        //     //- Rewrite correct url lang
        //     this.$router.push( { name: 'page-not-found', params: { lang : 'en' } } );
        // }
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

body {
    &:extend(.default-font);
}

.ods-wrapper {
    height: auto;
    @media (max-width: @mobile-width) {
        width: 100%;
        margin: 120px auto 0 auto;
    }
    @media (min-width: @desktop-width) {
        width: 870px;
        margin: 100px auto 0 auto;
    }
}

</style>
