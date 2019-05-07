<template>
    
    <header class="ods-header"
        :class="{ 'ods-header--active' : isSlideOut }">
        
        <div class="ods-header__brand">

            <div class="ods-header__content-block"></div>

            <router-link to="home"
                 class="ods-header__logo">
                <img
                    src="../../../assets/img/ods-logo-helphub.svg"
                    alt="OpenDataSoft HelpHub Logo">
            </router-link>

            <div class="ods-header__content-menu-toggle">
            
                <button type="button"
                        class="ods-header__menu-toggle"
                        id="nav-button"
                        :class="{ 'ods-header__menu-toggle--active' : isSlideOut }"
                        @click="emitToggleSlideOut()">
                    {{ trad.btn_menu[lang] }}
                </button>

            </div>

        </div>

        <navigation class="ods-header__nav"
            :lang="lang"
            :trad="trad">
        </navigation>

        <slideOut :lang="lang"
            :isSlideOut="isSlideOut"
            :trad="trad">
        </slideOut>

    </header>

</template>

<script>
//- Traductions
import tradApp from '../../../translations/app';

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
        lang: String,
        isSlideOut: Boolean
    },
    methods: {
        emitToggleSlideOut() {
            this.$emit('event_toggle_slide_out');
        }
    },
    watch: {
        '$route': function () {
            if (this.isSlideOut) this.emitToggleSlideOut();
        }
    }
}
</script>

<style lang='less'>
@import "../../../assets/less/variables";
@import "../../../assets/less/components";

.ods-header {
    width: 100%;
    height: @header-height;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 50;
    background-color: @blue-light;
    @media (min-width: @desktop-width) {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
}


.ods-header__brand {
    @media (max-width: @mobile-width) {
        width: 100%;
        justify-content: space-around;
        display: flex;
        height: 100%;
        margin: auto 0;
    }
    @media (min-width: @desktop-width) {
        width: auto;
        padding-left: @spacing-300;
    }
}

.ods-header__content-block {
    @media (min-width: @desktop-width) {
        display: none;
    }
}

.ods-header__content-menu-toggle,
.ods-header__content-logo {
    display: flex;
}

.ods-header__content-menu-toggle {
    justify-content: space-around;
}

.ods-header__link-logo {
    margin: auto 0;
}

.ods-header__content-logo {
    justify-content: center;
}

.ods-header__menu-toggle {
    &:extend(.default-button);
    font-size: @font-size-200;
    line-height: @line-height-200;
    margin: auto 0;
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

.ods-header__logo {
    margin: auto 0;

    img {
        height: 26px;
        width: 140px;
        vertical-align: middle;
    }
}

.ods-header__nav {
    @media (max-width: @mobile-width) {
        display: none!important;
    }
}

</style>
