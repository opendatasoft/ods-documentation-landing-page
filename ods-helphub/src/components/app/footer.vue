<template>

    <footer class="ods-footer"
        :class="{ 'ods-footer--active' : isSlideOut }">
        
        <a class="ods-footer__logo"
            href="https://www.opendatasoft.com/">
            <img src="../../assets/img/ODS_logo_footer.svg"
                alt="Opendatasoft logo">
        </a>

        <langs class="ods-footer__lang"
            :lang="lang">
        </langs>
        
    </footer>

</template>

<script>
import langs from '../elements/langs.vue';

export default {
    name: 'Footer',
    components: {
        'langs': langs
    },
    props: {
        isSlideOut: Boolean,
        lang: String
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
    border-top: 1px solid white;
}

.ods-footer__logo {
    margin: auto;
    height: 40px;
}

.ods-footer__logo img {
    height: 40px;
}

.ods-footer__lang {
    @media (max-width: @mobile-width) {
        display: none!important;
    }
}

</style>
