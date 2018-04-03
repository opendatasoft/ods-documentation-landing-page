<template>
    
    <header class="ods-header"
        :class="{ 'ods-header--active' : slideOut }">
        
        <div class="ods-header__brand">
            <div class="ods-header__content-menu-toggle">
                <button type="button"
                        class="ods-header__menu-toggle"
                        id="nav-button"
                        :class="{ 'ods-header__menu-toggle--active' : slideOut }"
                        @click="toggleSlideOut()">
                    Menu
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
        
        <div class="ods-header__nav">
            <div class="ods-header__nav-item">
                <a class="ods-header__nav-item-link"
                    id="header-platform"
                    href="https://docs.opendatasoft.com/en/">
                    Platform
                </a>
            </div>
            <div class="ods-header__nav-item">
                <a class="ods-header__nav-item-link"
                    id="header-discovery"
                    href="https://discovery.opendatasoft.com/pages/home/">
                    Discovery
                </a>
            </div>
            <div class="ods-header__nav-item">
                <a class="ods-header__nav-item-link"
                    id="header-faq"
                    href="https://docs.opendatasoft.com/en/faq.html">
                    FAQ
                </a>
            </div>
            <div class="ods-header__nav-item">
                <a class="ods-header__nav-item-link"
                    id="header-widgets"
                    href="https://opendatasoft.github.io/ods-widgets/docs/#/api">
                    Widgets
                </a>
            </div>
            <div class="ods-header__nav-item">
                <a class="ods-header__nav-item-link"
                    id="header-tutorial"
                    href="https://opendatasoft.github.io/ods-widgets/docs/#/tutorial">
                    Widgets Tutorial
                </a>
            </div>
            <div class="ods-header__nav-item">
                <a class="ods-header__nav-item-link"
                    id="header-api"
                    href="/apis.html">
                    API
                </a>
            </div>
        </div>

        <app__header__slideout
            :content="content"
            :lang="lang"
            :slideOut="slideOut"
            @event_toggle_slide_out_child="toggleSlideOut">
        </app__header__slideout>

    </header>

</template>

<script>
export default {
    name: 'app__header',
    props: ['content', 'lang', 'slideOut'],
    methods: {
        toggleSlideOut() {
            this.$emit('event_toggle_slide_out');
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

// Only in desktop
.ods-header__nav {
    top: 100px;
    left: -300px;
    width: 300px;
    background-color: @blue-light;
    transition: 0.5s;
    padding-left: 100px;
    position: static;
    width: 100%;
    flex-direction: row;
    border: none;
    display: flex;
    @media (max-width: @mobile-width) {
        display: none;
    }
}

.ods-header__nav-item {
    text-align: center;
    margin: auto 20px;
    transition: 0.5s;
    &:first-child {
        margin-left: -1px;
    }
    &:last-child {
        margin-right: 0px;
    }
}

.ods-header__nav-item-link {
    color: white;
    text-decoration: none;
    font-weight: 400;
    font-size: 18px;
    padding: 5px 0;
    border-bottom: 2px solid transparent;
    &:active,
    &:focus,
    &hover {
        color: white;
        text-decoration: none;
        border-bottom: 2px solid white;
    }
}

.ods-header__nav-item-link--active {
    border-bottom: 2px solid white;
}

</style>
