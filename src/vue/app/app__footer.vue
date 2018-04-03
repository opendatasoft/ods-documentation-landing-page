<template>

    <footer class="ods-footer"
        :class="{ 'ods-footer--active' : slideOut }">
        
        <img class="ods-footer__logo"
             src="../../assets/img/ODS_logo_footer.svg"
             alt="OpenDataSoft Documentation">
        
        <div class="ods-footer__nav-lang">
            
            <router-link :to="langLink('en')"
                class="ods-footer__nav-lang-item">
                EN
            </router-link>

            <router-link :to="langLink('fr')"
                class="ods-footer__nav-lang-item">
                FR
            </router-link>

            <router-link :to="langLink('es')"
                class="ods-footer__nav-lang-item">
                ES
            </router-link>

            <router-link :to="langLink('de')"
                class="ods-footer__nav-lang-item">
                DE
            </router-link>

            <router-link :to="langLink('nl')"
                class="ods-footer__nav-lang-item">
                NL
            </router-link>

        </div>
        
    </footer>

</template>

<script>
export default {
    name: 'app__footer',
    props: ['content', 'lang', 'slideOut'],
    methods: {
        langLink: function (lang) {
            var data = { params: { lang: lang } };
            return data;
        }
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.ods-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 50;
    width: 100%;
    height: 60px;
    background-color: @blue-light;
    display: flex;
}

.ods-footer--active {
    border-top: 1px solid lighten(@grey-border, 30%);
}

.ods-footer__logo {
    margin: auto;
    height: 40px;
}

.ods-footer__nav-lang {
    position: absolute;
    right: 20px;
    top: 15px;
    flex-direction: row;
    justify-content: space-around;
    padding: 0 10px;
    @media (max-width: @mobile-width) {
        display: none;
    }
    @media (min-width: @desktop-width) {
        display: flex;
    }
}

.ods-footer__nav-lang-item {
    &:extend(.default-font);
    &:extend(.default-button-lang);
    text-decoration: none;
}

// Button lang active
.router-link-active > .ods-lang--active {
    color: @blue-dark!important;
    background-color: white!important;
}

</style>
