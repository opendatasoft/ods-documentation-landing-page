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
    margin: 0 @spacing-300;
}

.ods-lang__item {
    font-size: @font-size-200;
    line-height: @line-height-200;
    color: @light-700;
    text-transform: uppercase;
    margin-right: @spacing-50;

    &:visited {
        color: @light-700;
    }
    
    &:hover,
    &.active {
        color: @identity-300;
    }
}


</style>