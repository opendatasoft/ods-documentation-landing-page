<template>

    <div v-if="urlIsInternal">

        <a :href="trad.url[lang]">
            
            <slot></slot>

        </a>
    
    </div>

    <div v-else>

        <router-link :to="trad.url[lang]">
            
            <slot></slot>

        </router-link>

    </div>
    
</template>

<script>
export default {
    name: 'boxesLink',
    props: {
        trad: Object,
        lang: String
    },
    computed: {
        urlIsInternal : function () {
            if (this.trad.url[this.lang].indexOf('https') > -1 ||
                this.trad.url[this.lang].indexOf('http') > -1) return true;
            else return false;
        }
    }
}
</script>