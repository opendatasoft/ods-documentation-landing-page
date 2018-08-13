<template>
    
    <div class="ods-header__slideout"
        :class="{ 'ods-header__slideout--active' : isSlideOut }">

        <navigation :lang="lang"
            :trad="trad">
        </navigation>

        <div class="ods-header__slideout-separator"></div>

        <langs :lang="lang"></langs>

    </div>

</template>

<script>
import navigation from '../../elements/navigation.vue';
import langs from '../../elements/langs.vue';

export default {
    name: 'slideout',
    components: {
        'navigation': navigation,
        'langs': langs
    },
    props: {
        lang: String,
        isSlideOut: Boolean,
        trad: Object
    }
}
</script>

<style lang='less'>
@import "../../../assets/less/variables";
@import "../../../assets/less/components";

.ods-header__slideout {
    top: 101px;
    right: -300px;
    width: 300px;
    height: 100vh;
    background-color: @blue-light;
    z-index: 49;
    transition: 0.5s;
    padding-top: 15px;
    position: absolute;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    
    @media (min-width: @desktop-width) {
        display: none;
    }
}

.ods-header__slideout-separator {
    border-top: 1px solid white;
    margin: 0 30px 15px 30px;
}

.ods-header__slideout--active {
    right: 0!important;
    bottom: 0;
}

</style>
