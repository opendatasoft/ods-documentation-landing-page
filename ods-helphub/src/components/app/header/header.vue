<template>
    
    <header class="ods-header"
        :class="{ 'ods-header--active' : isSlideOut }">
        
        <div class="ods-header__brand">

            <div class="ods-header__content-block"></div>

            <router-link to="home"
                 class="ods-header__logo">
                <img
                    src="../../../assets/img/ods-logo-noir.svg"
                    alt="Opendatasoft Logo">
                <div class="ods-header__brandname">
                    Help Center
                </div>
            </router-link>

            <div class="ods-header__content-menu-toggle">
            
                <button type="button"
                        class="ods-header__menu-toggle"
                        id="nav-button"
                        :class="{ 'ods-header__menu-toggle--active' : isSlideOut }"
                        @click="emitToggleSlideOut()">
                    <!-- {{ trad.btn_menu[lang] }} -->
                    <img
                        class="ods-header__menu-toggle__openlogo"
                        src="../../../assets/img/apps-custo.svg"
                        alt="Open Help Center menu">
                    <img
                        class="ods-header__menu-toggle__closelogo"
                        src="../../../assets/img/close-line.svg"
                        alt="Close Help Center menu">
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
    background-color: white;
    color: black;
    box-shadow: 0.0px 0.0px 13.0px 0px rgba(0, 0, 0, 0.13);

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
        justify-content: space-between;
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
    z-index: 50;
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

.ods-header__menu-toggle--active .ods-header__menu-toggle__openlogo {
    display: none;
}

.ods-header__menu-toggle__closelogo {
    display: none;
}
.ods-header__menu-toggle--active .ods-header__menu-toggle__closelogo {
    display: block;
}

.ods-header__logo {
    margin: auto 0;
    display: flex;
    align-items: center;

    img {
        height: 26px;
        width: 140px;
        vertical-align: middle;
    }
}

.ods-header__brandname {
  min-width: 130px;
  color: #565656;
  font-size: 18px;
  font-weight: 200;
  line-height: 27px;
  letter-spacing: 0.8px;
  padding-left: 13px;
  border-left: 1px solid;
  margin-left: 13px;
  text-align: left;
}

.ods-header__nav {
    @media (max-width: @mobile-width) {
        display: none!important;
    }
}

</style>
