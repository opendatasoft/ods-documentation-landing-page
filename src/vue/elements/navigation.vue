<template>

    <div class="ods-nav">
        
        <router-link :to="navigation('https://docs.opendatasoft.com/en/')"
            class="ods-nav__link">
            {{ content.platform[lang] }}
        </router-link>

        <router-link :to="navigation('https://discovery.opendatasoft.com/pages/home/')"
            class="ods-nav__link">
            {{ content.discovery[lang] }}
        </router-link>

        <router-link :to="navigation('https://docs.opendatasoft.com/en/faq.html')"
            class="ods-nav__link">
            {{ content.faq[lang] }}
        </router-link>

        <router-link :to="navigation('https://opendatasoft.github.io/ods-widgets/docs/#/api')"
            class="ods-nav__link">
            {{ content.widgets[lang] }}
        </router-link>

        <router-link :to="navigation('https://opendatasoft.github.io/ods-widgets/docs/#/tutorial')"
            class="ods-nav__link">
            {{ content.tutorial[lang] }}
        </router-link>

        <router-link :to="navigation('apis')"
            class="ods-nav__link">
            {{ content.api[lang] }}
        </router-link>

    </div>
    
</template>

<script>
export default {
    name: 'navigation',
    props: ['lang', 'content'],
    methods: {
        navigation: function (URL) {
            // if (URL.includes('https') || URL.includes('http')) {
            //     window.open(URL, '_blank');
            // } else {
            //     var data = { name: URL };
            //     return data;
            // }
            return URL;
        }
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.ods-nav {
    background-color: @blue-light;
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

.ods-nav__link {
    color: white;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: 0.5s;
    padding: 5px 0;
    &:active,
    &:focus,
    &:hover {
        border-bottom: 2px solid white;
    }
    @media (max-width: @mobile-width) {
        margin: 20px auto;
        width: auto;
    }
    @media (min-width: @desktop-width) {
        margin: auto 20px;
        font-size: 18px;
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
    }
}

.ods-nav__link.active {
    border-bottom: 2px solid white;
}

</style>