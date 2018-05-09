<template>
    
    <div class="ods-header__slideout"
        :class="{ 'ods-header__slideout--active' : slideOut }">

        <navigation :lang="lang"
            :trad="trad">
        </navigation>

        <langs></langs>

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
        slideOut: Boolean,
        trad: Object
    }
}
</script>

<style lang='less'>
@import "../../../assets/less/variables";
@import "../../../assets/less/components";

.ods-header__slideout {
    top: 101px;
    left: -300px;
    width: 300px;
    height: 100vh;
    background-color: @blue-light;
    z-index: 49;
    transition: 0.5s;
    padding-top: 15px;
    position: absolute;
    overflow-y: scroll;
    @media (min-width: @desktop-width) {
        display: none;
    }
}

.ods-header__slideout--active {
    left: 0!important;
    bottom: 0;
}

</style>
