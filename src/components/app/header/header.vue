<template>
    
    <header class="ods-header"
        :class="{ 'ods-header--active' : slideOut }">
        
        <div class="ods-header__brand">
            
            <div class="ods-header__content-menu-toggle">
            
                <button type="button"
                        class="ods-header__menu-toggle"
                        id="nav-button"
                        :class="{ 'ods-header__menu-toggle--active' : slideOut }"
                        @click="emitToggleSlideOut()">
                    {{ trad.btn_menu[lang] }}
                </button>

            </div>

            <div class="ods-header__content-logo">
            
                <router-link :to="{ name: 'home' }">
            
                    <img class="ods-header__logo"
                        src="../../../assets/img/ODS_logo_header.svg"
                        alt="OpenDataSoft Documentation">

                </router-link>

            </div>

        </div>

        <navigation class="ods-header__nav"
            :lang="lang"
            :trad="trad">
        </navigation>

        <slideOut :slideOut="slideOut"
            :lang="lang"
            :trad="trad">
        </slideOut>

    </header>

</template>

<script>
//- Traductions
import tradApp from '../../../traductions/app';

//- Components
import slideOut from './slideout.vue';
import navigation from '../../elements/navigation.vue';

export default {
    name: 'Header',
    components: {
        'slideOut': slideOut,
        'navigation': navigation
    },
    data: function () {
        return {
            trad: tradApp
        }
    },
    props: {
        slideOut: Boolean,
        lang: String
    },
    methods: {
        emitToggleSlideOut() {
            this.$emit('event_toggle_slide_out');
        }
    },
    watch: {
        '$route': function () {
            if (this.slideOut) this.emitToggleSlideOut();
        }
    }
}
</script>

<style lang='less'>
@import "../../../assets/less/variables";
@import "../../../assets/less/components";

.ods-header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: @blue-light;
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
