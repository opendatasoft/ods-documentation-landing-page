<template>
    
    <div class="ods-header__slideout"
        :class="{ 'ods-header__slideout--active' : slideOut }">

        <div class="ods-header__slideout-container">
            
            <a class="ods-header__slideout-container-link"
                id="header-platform"
                href="https://docs.opendatasoft.com/en/">
                Platform
            </a>
        
            <a class="ods-header__slideout-container-link"
                id="header-discovery"
                href="https://discovery.opendatasoft.com/pages/home/">
                Discovery
            </a>

            <a class="ods-header__slideout-container-link"
                id="header-faq"
                href="https://docs.opendatasoft.com/en/faq.html">
                FAQ
            </a>
        
            <a class="ods-header__slideout-container-link"
                id="header-widgets"
                href="https://opendatasoft.github.io/ods-widgets/docs/#/api">
                Widgets
            </a>
        
            <a class="ods-header__slideout-container-link"
                id="header-tutorial"
                href="https://opendatasoft.github.io/ods-widgets/docs/#/tutorial">
                Widgets Tutorial
            </a>
        
            <router-link class="ods-header__slideout-container-link"
                id="header-api"
                :to="{ name: 'apis' }">
                API
            </router-link>
        
            <router-link :to="langLink('en')" 
                class="ods-header__slideout-container-lang">
                EN
            </router-link>

            <router-link :to="langLink('fr')" 
                class="ods-header__slideout-container-lang">
                FR
            </router-link>

            <router-link :to="langLink('es')" 
                class="ods-header__slideout-container-lang">
                ES
            </router-link>

            <router-link :to="langLink('de')" 
                class="ods-header__slideout-container-lang">
                DE
            </router-link>

            <router-link :to="langLink('nl')" 
                class="ods-header__slideout-container-lang">
                NL
            </router-link>

        </div>
    
    </div>

</template>

<script>
export default {
    name: 'app__header__slideout',
    props: ['content', 'lang', 'slideOut'],
    methods: {
        langLink: function (lang) {
            var data = { params: { lang: lang } };
            return data;
        },
        toggle_slide_out: function () {
            this.$emit('event_toggle_slide_out_child');
        }
    },
    watch: {
        '$route': function () {
            if (this.slideOut) this.toggle_slide_out();
        }
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.ods-header__slideout--active {
    left: 0!important;
    bottom: 0;
}

.ods-header__slideout {
    top: 99.5px;
    left: -300px;
    width: 300px;
    background-color: @blue-light;
    z-index: 49;
    transition: 0.5s;
    padding-top: 15px;
    position: absolute;
    overflow-y: scroll;
    height: 100vh;
    @media (min-width: @desktop-width) {
        display: none;
    }
}

.ods-header__slideout-container {
    display: flex;
    flex-direction: column;
    padding: 0 0 190px 0;
}

.ods-header__slideout-container-link {
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-size: 16px;
    padding: 15px 0;
    margin: 0 auto;
    &:active,
    &:focus,
    &hover {
        color: white;
        text-decoration: none;
    }
}

.ods-header__slideout-container-lang {
    &:extend(.default-font);
    &:extend(.default-button-lang);
    text-decoration: none;
    margin: 15px auto;
}

// Button lang active
.router-link-active > .ods-lang--active {
    color: @blue-dark!important;
    background-color: white!important;
}

</style>
