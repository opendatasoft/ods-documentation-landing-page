<template>

    <div>
        
        <Header :lang="this.$root.$data.lang"
            :isSlideOut="isSlideOut"
            @event_toggle_slide_out="toggleSlideOut">
        </Header>
        
        <div class="ods-wrapper"
            :class="{ 'ods-wrapper--active' : isSlideOut }">
            
            <router-view :lang="this.$root.$data.lang">
            </router-view>

        </div>
        
        <Footer :isSlideOut="isSlideOut"
            :lang="this.$root.$data.lang">
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
            isSlideOut: false
        }
    },
    created() {
        if (appLang.indexOf(this.$route.params.lang) > -1) {
            this.$root.$data.lang = this.$route.params.lang;
        }
    },
    methods: {
        toggleSlideOut() {
            this.isSlideOut = !this.isSlideOut;
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

* {
    box-sizing: border-box;
}
html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", Helvetica;
    font-size: 15px;
}

body {
    margin: 0;
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
    height: 100%;
    min-height: ~"calc(100vh - @{header-height} - @{footer-height} - 2 * @{spacing-300})";
    @media (max-width: @mobile-width) {
        width: 100%;
        margin: 120px auto 0 auto;
    }
    @media (min-width: @desktop-width) {
        width: 752px;
        margin: @header-height + @spacing-300 auto @spacing-300 auto;
    }
}

.ods-wrapper--active {
    overflow: hidden;
    position:fixed;
}

</style>
