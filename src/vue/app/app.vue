<template>

    <div>
        
        <app__header></app__header>
        
        <div class="ods-wrapper"
            :class="{ 'ods-wrapper--active' : globalState.slideOut }">
            
            <router-view @event_set_lang="setLang">
            </router-view>

        </div>
        
        <app__footer></app__footer>

    </div>

</template>

<script>
export default {
    name: 'app',
    computed: {

    },
    methods: {
        setLang(value) {
            // this.$store.dispatch('set_lang', value);
            document.documentElement.setAttribute('lang', value);
        }
    },
    created: function() {
        if (['en', 'fr', 'es', 'de', 'nl'].indexOf(this.$route.params.lang) >= 0) {
            //- Dispatch load content trad in the store
            // this.$store.dispatch('load_store_content');
            this.setLang(this.$route.params.lang);
        } else {
            // this.$store.dispatch('load_store_content');
            // this.setLang('en');
            //- Rewrite correct url lang
            this.$router.push( { name: 'page-not-found', params: { lang : 'en' } } );
        }
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

body {
    &:extend(.default-font);
}

a {
    text-decoration: none;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    img {
        border: none;
    }
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

.ods-wrapper--active {
    height: 77vh;
    overflow-y: hidden;
}

</style>
