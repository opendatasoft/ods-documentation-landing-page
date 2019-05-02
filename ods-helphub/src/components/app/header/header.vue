<template>
    
    <header class="ods-header"
        :class="{ 'ods-header--active' : isSlideOut }">
        
        <div class="ods-header__brand">

            <div class="ods-header__content-block"></div>

            <div class="ods-header__content-logo">
            
            <router-link to="home"
                class="ods-header__link-logo">
                <img v-if="this.$route.name === 'apis'"
                    class="ods-header__logo"
                    src="../../../assets/img/ODS_logo_api_blanc.svg"
                    alt="OpenDataSoft APIs Logo">
                <img v-else
                    class="ods-header__logo"
                    src="../../../assets/img/ODS_logo_help_hub_blanc.svg"
                    alt="OpenDataSoft HelpHub Logo">
            </router-link>

            </div>

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

@header-height: 80px;

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
    border-bottom: 1px solid white;
}


.ods-header__brand {
    display: flex;
    height: @header-height;
    @media (max-width: @mobile-width) {
        width: 100%;
        justify-content: space-evenly;
    }
    @media (min-width: @desktop-width) {
        width: auto;
        padding-left: 40px;
    }
}

.ods-header__content-block {
    min-width: 23%;

    @media (max-width: 321px) {
        min-width: 20%;    
    }

    @media (min-width: @desktop-width) {
        display: none;
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

.ods-header__link-logo {
    margin: auto 0;
    height: @header-height - 20px;
}

.ods-header__content-logo {
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

.ods-header__logo {
    @media (max-width: @mobile-width) {
        height: @header-height - 30px;
    }
    @media (min-width: @desktop-width) {
        height: @header-height - 20px;
    }
}

.ods-header__nav {
    @media (max-width: @mobile-width) {
        display: none!important;
    }
}

</style>
