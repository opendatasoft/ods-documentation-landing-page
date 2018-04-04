<template>

    <div class="ods-container"
         :class="{ 'ods-container--active' : globalState.slideOut }">
        
         <boxes_link
            :lang="globalState.lang"
            :content="content_home.platform">
            
            <boxes
                :lang="globalState.lang"
                :content="content_home.platform"
                :img="img.platform"
                :page="page">
            </boxes>
            
        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_home.discovery">

            <boxes
                :lang="globalState.lang"
                :content="content_home.discovery"
                :img="img.discovery"
                :page="page">
            </boxes>

        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_home.faq">

            <boxes
                :lang="globalState.lang"
                :content="content_home.faq"
                :img="img.faq"
                :page="page">
            </boxes>

        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_home.widgets">

            <boxes
                :lang="globalState.lang"
                :content="content_home.widgets"
                :img="img.widgets"
                :page="page">
            </boxes>

        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_home.tutorial">

            <boxes
                :lang="globalState.lang"
                :content="content_home.tutorial"
                :img="img.tutorial"
                :page="page">
            </boxes>

        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_home.api">

            <boxes
                :lang="globalState.lang"
                :content="content_home.api"
                :img="img.api"
                :page="page">
            </boxes>

        </boxes_link>

    </div>

</template>

<script>
import { setMetas } from '../../js/util';
import { mapGetters } from 'vuex';

import platform from '../../assets/img/ODS_picto_platform.svg';
import discovery from '../../assets/img/ODS_picto_discovery.svg';
import faq from '../../assets/img/ODS_picto_faq.svg';
import widgets from '../../assets/img/ODS_picto_widget.svg';
import tutorial from '../../assets/img/ODS_picto_tuto.svg';
import api from '../../assets/img/ODS_picto_api.svg';

export default {
    name: 'home',
    props: ['slideOut'],
    data: function() {
        return {
            img : {
                platform: platform,
                discovery: discovery,
                faq: faq,
                widgets: widgets,
                tutorial: tutorial,
                api: api
            }
        }
    },
    computed: {
        ...mapGetters([
            'globalState',
            'metas',
            'content_home'
        ]),
        page: function() {
            return this.$route.name;
        }
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

.ods-container--active {
    overflow-y: hidden;
}

</style>
