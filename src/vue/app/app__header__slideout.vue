<template>
    
    <div class="ods-header__slideout"
        :class="{ 'ods-header__slideout--active' : slideOut }">

        <navigation
            :lang="lang"
            :content="content">
        </navigation>

        <langs 
            :lang="lang">
        </langs>

    </div>

</template>

<script>
export default {
    name: 'app__header__slideout',
    props: {
        content: Object,
        lang: String,
        slideOut: Boolean
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.ods-header__slideout {
    top: 99.5px;
    left: -300px;
    width: 300px;
    background-color: @blue-light;
    z-index: 49;
    transition: 0.5s;
    padding-top: 15px;
    position: absolute;
    overflow-y: scroll;
    height: 100vh;
    @media (min-width: @desktop-width) {
        display: none;
    }
}

.ods-header__slideout--active {
    left: 0!important;
    bottom: 0;
}

</style>
