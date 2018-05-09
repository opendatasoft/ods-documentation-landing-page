<template>

    <div>
        
        <Header :lang="this.$root.$data.lang"
            :slideOut="slideOut"
            @event_toggle_slide_out="toggleSlideOut">
        </Header>
        
        <div class="ods-wrapper"
            :class="{ 'ods-wrapper--active' : slideOut }">
            
            <router-view :lang="this.$root.$data.lang">
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

const appLang = ['en', 'fr', 'es', 'de', 'nl'];

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
    created() {
        if (appLang.indexOf(this.$route.params.lang) > -1) {
            this.$root.$data.lang = this.$route.params.lang;
        }
    },
    methods: {
        toggleSlideOut() {
            this.slideOut = !this.slideOut;
        }
    },
    watch: {
        '$route': function() {
            if (this.$route.params.lang !== this.$root.$data.lang) {
                this.$root.$data.lang = this.$route.params.lang;
            }
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
