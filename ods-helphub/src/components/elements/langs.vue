<template>

    <div class="ods-lang">
            
        <router-link :to="langLink('en')"
            class="ods-lang__item"
            :title='trad.langEN[lang]'>
            EN
        </router-link>

        <router-link :to="langLink('fr')"
            class="ods-lang__item"
            :title='trad.langFR[lang]'>
            FR
        </router-link>

        <router-link :to="langLink('es')"
            class="ods-lang__item"
            :title='trad.langES[lang]'>
            ES
        </router-link>

        <router-link :to="langLink('de')"
            class="ods-lang__item"
            :title='trad.langDE[lang]'>
            DE
        </router-link>

        <router-link :to="langLink('nl')"
            class="ods-lang__item"
            :title='trad.langNL[lang]'>
            NL
        </router-link>

    </div>
    
</template>

<script>
//- Traductions
import tradLangs from '../../translations/language';

export default {
    name: 'langs',
    data: function () {
        return {
            trad: tradLangs
        }
    },
    props: {
        lang: String
    },
    methods: {
        langLink: function (lang) {
            var data = { params: { lang } };
            if (!('lang' in this.$route.params)) {
                data.name = 'home';
            }
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
        margin: 0 0 220px 0;
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
    color: @blue-medium;
    background-color: white;
    padding: 7px;
    border-radius: 4px;
    font-weight: 500;
    &:hover {
        color:white;
        background-color: @blue-medium;
    }
    @media (max-width: @mobile-width) {
        margin: 15px auto;
        line-height: 25px;
        &:first-child {
            margin-top: 20px;
        }
    }
    @media (min-width: @desktop-width) {
        margin: auto 20px;
    }
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-lang {
        height: auto;
        margin-bottom: 20px;
    }
    *::-ms-backdrop, .ods-lang {
        margin-bottom: 15px;
    }
}

.ods-lang__item.active {
    background-color: @blue-medium;
    color: white;
}

</style>