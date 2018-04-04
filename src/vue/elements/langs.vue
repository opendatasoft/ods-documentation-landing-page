<template>

    <div class="ods-lang">
            
        <router-link :to="langLink('en')"
            class="ods-lang__item">
            EN
        </router-link>

        <router-link :to="langLink('fr')"
            class="ods-lang__item">
            FR
        </router-link>

        <router-link :to="langLink('es')"
            class="ods-lang__item">
            ES
        </router-link>

        <router-link :to="langLink('de')"
            class="ods-lang__item">
            DE
        </router-link>

        <router-link :to="langLink('nl')"
            class="ods-lang__item">
            NL
        </router-link>

    </div>
    
</template>

<script>
export default {
    name: 'langs',
    props: ['lang'], 
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

.ods-lang {
    padding: 0;
    display: flex;
    @media (max-width: @mobile-width) {
        flex-direction: column;
        width: 300px;
        margin: 0 0 200px 0;
        position: static;
        height: auto;
    }
    @media (min-width: @desktop-width) {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 100%;
        width: auto;
        flex-direction: row;
        margin: 0 20px 0 0;
    }
}

.ods-lang__item {
    color: white;
    padding: 7px;
    border-radius: 4px;
    &:hover {
        color: @blue-dark;
        background-color: white;
    }
    @media (max-width: @mobile-width) {
        margin: 20px auto;
        &:first-child {
            margin-top: 20px;
        }
    }
    @media (min-width: @desktop-width) {
        margin: auto 20px;
    }
}

.ods-lang__item.active {
    color: @blue-dark;
    background-color: white;
}

</style>