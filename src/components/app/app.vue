<template>

    <div>
        
        <Header :slideOut="slideOut"
            :lang="this.$root.store.state.lang"
            @event_toggle_slide_out="toggleSlideOut">
        </Header>
        
        <div class="ods-wrapper"
            :class="{ 'ods-wrapper--active' : slideOut }">
            
            <router-view :lang="this.$root.store.state.lang"
                @event_set_lang="setLang">
            </router-view>

        </div>
        
        <Footer :slideOut="slideOut">
        </Footer>

    </div>

</template>

<script>
//- Components
import header from './header/header.vue';
import footer from './footer.vue';

export default {
    name: 'app',
    components: {
        'Header': header,
        'Footer': footer
    },
    data: function() {
        return {
            slideOut: false
        }
    },
    methods: {
        setLang(value) {
            this.$root.store.setLang(value);
            document.documentElement.setAttribute('lang', value);
        },
        toggleSlideOut() {
            this.slideOut = !this.slideOut;
        }
    },
    created: function() {
        if (['en', 'fr', 'es', 'de', 'nl'].indexOf(this.$route.params.lang) >= 0) {
            this.setLang(this.$route.params.lang);
            this.$router.push( { params: { lang : this.$route.params.lang } } );
        } else {
            this.setLang('en');
            this.$router.push( { name: 'notFound', params: { lang : 'en' } } );
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
