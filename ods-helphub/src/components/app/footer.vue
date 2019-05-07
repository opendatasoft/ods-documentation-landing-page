<template>

    <footer class="footer-container"
        :class="{ 'ods-footer--active' : isSlideOut }">
        
        <a class="footer-container__logo"
            href="https://www.opendatasoft.com/">
            <img src="../../assets/img/ods-logo.svg"
                alt="OpenDataSoft logo">
        </a>

        <langs class="footer-container__lang"
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

@footer-height: 50px;

.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: @light-100;
    border-top: 1px solid @light-300;
    height: @footer-height;
    width: 100%;
}

.footer-container__logo {
    margin: auto 0 auto @spacing-300;
    img {
        height: 24px;
        width: auto;
    }
}
</style>
