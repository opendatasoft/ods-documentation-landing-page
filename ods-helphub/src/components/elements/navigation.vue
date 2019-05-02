<template>

    <div class="ods-nav">

        <router-link :to="{ name : 'home', params: { lang: lang }}"
            class="ods-nav__link">
            Help Hub
        </router-link>

        <a :href="`/platform/${lang}/`"
            class="ods-nav__link">
            {{ trad.platform[lang] }}
        </a>

        <a href="https://discovery.opendatasoft.com/"
            class="ods-nav__link">
            {{ trad.discovery[lang] }}
        </a>

        <a :href="`/faq-glossary/${lang}/`"
            class="ods-nav__link">
            {{ trad.faq[lang] }}
        </a>

        <a href="/widgets/#/api/"
            class="ods-nav__link">
            {{ trad.widgets[lang] }}
        </a>

        <router-link :to="{ name : 'apis', params: { lang: lang }}"
            class="ods-nav__link">
            {{ trad.apis[lang] }}
        </router-link>

        <a href="/tutorials/en/"
            class="ods-nav__link">
            {{ trad.tutorials[lang] }}
        </a>

    </div>
    
</template>

<script>
export default {
    name: 'navigation',
    props: {
        lang: String,
        trad: Object
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.ods-nav {
    transition: 0.5s;
    border: none;
    display: flex;
    @media (max-width: @mobile-width) {
        width: 300px;
        flex-direction: column;
        padding: 10px 0;
    }
    @media (min-width: @desktop-width) {
        width: 100%;
        flex-direction: row;
        padding-left: 100px;
    }
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-nav {
        margin: 0 0 0 130px;
        padding-top: 35px;
    }
    *::-ms-backdrop, .ods-nav { 
        margin: 0 0 0 170px;
        padding-top: 0;
    }
}

.ods-nav {
    display: flex;
    display: -ms-flexbox;
    flex-direction: row;
    -ms-flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.ods-nav__link {
    font-size: 11px;
    background-color: transparent;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 4px;
    text-transform: uppercase;
    outline: none;
    margin: auto @spacing-50 / 2;

    &:hover, :focus, :active, &.active {
        background-color: @blue-medium;
    }

    @media (max-width: @mobile-width) {
        /*margin: 15px auto;*/
        /*width: auto;*/
    }
    @media (min-width: @desktop-width) {
        /*margin: auto 20px;*/
        /*font-size: 18px;*/
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    *::-ms-backdrop, .ods-nav__link {
        padding: 5px 0;
        height: 25px;
    }
}

</style>