<template>

    <footer class="ods-footer">
        <img class="ods-footer__logo"
             src="../../assets/img/ODS_logo_footer.svg"
             alt="OpenDataSoft Documentation">
        <div class="ods-footer__nav-lang">
            <button class="ods-footer__nav-lang-item ods-lang--active"> EN </button>
            <button class="ods-footer__nav-lang-item"> FR </button>
            <button class="ods-footer__nav-lang-item"> ES </button>
            <button class="ods-footer__nav-lang-item"> DE </button>
            <button class="ods-footer__nav-lang-item"> NL </button>
        </div>
    </footer>

</template>

<script>
export default {
    name: 'app__footer',
    data: function () {
        return {
            
        }
    },
    computed: {
        
    },
    methods: {
        
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
    &:hover {
        &:extend(.ods-lang--active);
    }
}

</style>
