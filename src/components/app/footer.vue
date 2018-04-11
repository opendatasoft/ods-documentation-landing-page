<template>

    <footer class="ods-footer"
        :class="{ 'ods-footer--active' : slideOut }">
        
        <img class="ods-footer__logo"
             src="../../assets/img/ODS_logo_footer.svg"
             alt="OpenDataSoft Documentation">

        <langs class="ods-footer__lang">
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
        slideOut: Boolean
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

.ods-footer__lang {
    @media (max-width: @mobile-width) {
        display: none!important;
    }
}

</style>
