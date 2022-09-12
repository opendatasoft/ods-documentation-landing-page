<template>

    <div class="ods-nav">

        <div class="ods-header__nav-item">
            <a :href="`/platform/${lang}/`"
                class="ods-nav__link">
                {{ trad.platform[lang] }}
            </a>
        </div>

        <div class="ods-header__nav-item">
            <a href="https://codelibrary.opendatasoft.com/"
                class="ods-nav__link">
                {{ trad.codelibrary[lang] }}
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
          <a :href="lang === 'fr' ? 'https://academy.opendatasoft.com/' : 'https://academy.opendatasoft.com/page/homepage'"
              class="ods-nav__link">
              {{ trad.academy[lang] }}
          </a>
        </div>

        <div class="ods-header__nav-item">
            <a href="https://documentation-resources.opendatasoft.com/pages/release-notes/?headless=true"
                class="ods-nav__link">
                {{ trad.releasenotes[lang] }}
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
    border-radius: 0;

    &:first-child {
        margin-left: 0;
    }
    &:last-child {
        margin-right: 0;
    }

    @media (max-width: @mobile-width) {
        margin: @spacing-200 auto 0 @spacing-200;

        &:first-child {
            margin-left: @spacing-200;
            margin-top: 0;
        }

        &:last-child {
            margin-right: auto;
        }
        &:hover, :focus, :active, &.active {
            color: black;
            font-weight: 400;
            border-radius: 0px;
            border-bottom: 3px solid @blue-dark;
        }
    }
}

.ods-nav__link {
    background-color: transparent;
    color: #565656;
    border: none;
    padding: 8px;
    border-radius: 4px;
    text-transform: uppercase;
    outline: none;
    font-size: 15px;
    font-weight: 200;
    line-height: 27px;
    letter-spacing: 0.8px;


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
