<template>

    <div class="ods-container">
        
        <boxes
            :lang="globalState.lang"
            :content="content_home"
            :img="platform">
        </boxes>
        
    </div>

</template>

<script>
import { setMetas } from '../../js/util';
import { mapGetters } from 'vuex'

export default {
    name: 'home',
    data: function() {
        return {
            platform: '../../assets/img/ODS_picto_faq.svg'
        }
    },
    computed: {
        ...mapGetters([
            'globalState',
            'metas',
            'content_home'
        ])
    },
    methods: {
        setHomeMetas: function () {
            setMetas({
                title:          this.metas.home.title[this.globalState.lang],
                description:    this.metas.home.description[this.globalState.lang],
                image:          this.metas.home.image[this.globalState.lang],
                lang:           this.globalState.lang
            });
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.setHomeMetas();
        });
    },
    beforeRouteUpdate (to, from, next) {
        this.$emit('event_set_lang', to.params.lang);
        this.setHomeMetas();
        next();
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.ods-container {
    display: flex;
    height: auto;
    @media (max-width: @mobile-width) {
        flex-direction: column;
        padding: 20px 0 0 0;
        margin-bottom: 60px;
    }
    @media (min-width: @desktop-width) {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 42px 40px 0 40px;
        margin-bottom: 70px;
    }
}

</style>
