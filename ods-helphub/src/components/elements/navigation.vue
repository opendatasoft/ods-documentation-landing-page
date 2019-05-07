<template>

    <div class="ods-nav">

        <div class="ods-header__nav-item">
            <router-link :to="{ name : 'home', params: { lang: lang }}"
                class="ods-nav__link">
                Help Hub
            </router-link>
        </div>

        <div class="ods-header__nav-item">
            <a :href="`/platform/${lang}/`"
                class="ods-nav__link">
                {{ trad.platform[lang] }}
            </a>
        </div>

        <div class="ods-header__nav-item">
            <a href="https://discovery.opendatasoft.com/"
                class="ods-nav__link">
                {{ trad.discovery[lang] }}
            </a>
        </div>

        <div class="ods-header__nav-item">
            <a :href="`/faq-glossary/${lang}/`"
                class="ods-nav__link">
                {{ trad.faq[lang] }}
            </a>
        </div>

        <div class="ods-header__nav-item">
            <a href="/widgets/#/api/"
                class="ods-nav__link">
                {{ trad.widgets[lang] }}
            </a>
        </div>

        <div class="ods-header__nav-item">
            <router-link :to="{ name : 'apis', params: { lang: lang }}"
                class="ods-nav__link">
                {{ trad.apis[lang] }}
            </router-link>
        </div>

        <div class="ods-header__nav-item">
            <a href="/tutorials/en/"
                class="ods-nav__link">
                {{ trad.tutorials[lang] }}
            </a>
        </div>

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

.ods-header__nav {
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
        margin-left: 65px;
    }
}

.ods-nav {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: @mobile-width) {
        flex-direction: column;
        padding-top: @spacing-300;
    }
}

.ods-header__nav-item {
    margin: auto @spacing-50/2  auto @spacing-50/2;
    font-size: .733rem;
    line-height: 1.5;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }

    @media (max-width: @mobile-width) {
        margin: @spacing-200 auto 0 auto;

        &:first-child {
            margin-left: auto;
            margin-top: 0;
        }

        &:last-child {
            margin-right: auto;
        }

    }
}

.ods-nav__link {
    letter-spacing: 0.8px;
    background-color: transparent;
    color: white;
    border: none;
    padding: 8px;
    border-radius: 4px;
    text-transform: uppercase;
    outline: none;

    &:hover, :focus, :active, &.active {
        background-color: @blue-medium;
    }

    @media (max-width: @mobile-width) {
    }
    @media (min-width: @desktop-width) {
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