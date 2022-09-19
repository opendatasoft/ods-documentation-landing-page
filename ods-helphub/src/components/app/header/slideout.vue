<template>
    
    <div class="ods-header__slideout"
        :class="{ 'ods-header__slideout--active' : isSlideOut }">

        <navigation :lang="lang"
            :trad="trad">
        </navigation>
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
    top: 0px;
    padding-top: @header-height;
    right: -300px;
    width: 300px;
    height: 100vh;
    background-color: white;
    z-index: 49;
    transition: 0.5s;
    position: absolute;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.13);
    
    @media (min-width: @desktop-width) {
        display: none;
    }
}

.ods-header__slideout--active {
    right: 0!important;
    bottom: 0;
}

</style>
