<template>

    <div v-if="URL">

        <a :href="content.url[lang]">
            
            <slot></slot>

        </a>
    
    </div>

    <div v-else>

        <router-link :to="content.url[lang]">
            
            <slot></slot>

        </router-link>

    </div>
    
</template>

<script>
export default {
    name: 'boxes_link',
    props: ['lang', 'content'],
    computed: {
        URL : function () {
            if (this.content.url[this.lang].indexOf('https') > -1 ||
                this.content.url[this.lang].indexOf('http') > -1) return true;
            else return false;
        }
    }
}
</script>