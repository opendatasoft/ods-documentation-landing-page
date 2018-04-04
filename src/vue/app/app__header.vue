<template>
    
    <header class="ods-header"
        :class="{ 'ods-header--active' : globalState.slideOut }">
        
        <div class="ods-header__brand">
            
            <div class="ods-header__content-menu-toggle">
            
                <button type="button"
                        class="ods-header__menu-toggle"
                        id="nav-button"
                        :class="{ 'ods-header__menu-toggle--active' : globalState.slideOut }"
                        @click="toggleSlideOut()">
                    {{ content_app.btn_menu[globalState.lang] }}
                </button>

            </div>

            <div class="ods-header__content-logo">
            
                <router-link :to="{ name: 'home' }">
            
                    <img class="ods-header__logo"
                        src="../../assets/img/ODS_logo_header.svg"
                        alt="OpenDataSoft Documentation">

                </router-link>

            </div>

        </div>

        <navigation class="ods-header__nav"
            :lang="globalState.lang"
            :content="content_app">
        </navigation>

        <app__header__slideout
            :content="content_app"
            :lang="globalState.lang"
            :slideOut="globalState.slideOut">
        </app__header__slideout>

    </header>

</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'app__header',
    computed: {
        ...mapGetters([
            'globalState',
            'content_app'
        ])
    },
    methods: {
        toggleSlideOut() {
            this.$store.dispatch('toggle_slide_out');
        }
    },
    watch: {
        '$route': function () {
            if (this.globalState.slideOut) this.toggleSlideOut();
        }
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.ods-header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    @media (min-width: @desktop-width) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
}

.ods-header--active {
    border-bottom: 1px solid lighten(@grey-border, 30%);
}


.ods-header__brand {
    display: flex;
    height: 99px;
    background-color: @blue-light;
    @media (max-width: @mobile-width) {
        width: 100%;
    }
    @media (min-width: @desktop-width) {
        width: auto;
        padding-left: 41px;
    }
}

.ods-header__content-menu-toggle,
.ods-header__content-logo {
    display: flex;
}

.ods-header__content-menu-toggle {
    width: 25%;
    justify-content: space-around;
}

.ods-header__content-logo {
    width: 50%;
    justify-content: center;
}

.ods-header__menu-toggle {
    &:extend(.default-button);
    &:extend(.default-font);
    margin: auto auto;
    &:focus {
        outline: none;
    }
    @media (min-width: @desktop-width) {
        display: none;
    }
}

.ods-header__menu-toggle--active {
    background-color: @blue-medium!important;
    color: white!important;
}

.ods-header__home-link {
    @media (max-width: @mobile-width) {
        padding-top: 12px;
    }
    @media (min-width: @desktop-width) {
        padding-top: 8px;
    }
}

.ods-header__logo {
    margin: 10px 0;
    @media (max-width: @mobile-width) {
        height: 70px;
    }
    @media (min-width: @desktop-width) {
        height: 80px;
    }
}

.ods-header__nav {
    @media (max-width: @mobile-width) {
        display: none!important;
    }
}

</style>
