<template>

    <div class="ods-container"
        :class="{ 'ods-container--active' : globalState.slideOut }">

        <p class="ods-container__description">
            
            {{ content_apis.descTop[globalState.lang] }}
            
        </p>
        
        <boxes_link
            :lang="globalState.lang"
            :content="content_apis.searchv1">
            
            <boxes
                :lang="globalState.lang"
                :content="content_apis.searchv1"
                :img="img.search"
                :page="page">
            </boxes>
            
        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_apis.searchv2">

            <boxes
                :lang="globalState.lang"
                :content="content_apis.searchv2"
                :img="img.search"
                :page="page">
            </boxes>

        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_apis.csw">

            <boxes
                :lang="globalState.lang"
                :content="content_apis.csw"
                :img="img.search"
                :page="page">
            </boxes>
            
        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_apis.wfs">

            <boxes
                :lang="globalState.lang"
                :content="content_apis.wfs"
                :img="img.search"
                :page="page">
            </boxes>
            
        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_apis.odata">

            <boxes
                :lang="globalState.lang"
                :content="content_apis.odata"
                :img="img.search"
                :page="page">
            </boxes>
            
        </boxes_link>

        <boxes_link
            :lang="globalState.lang"
            :content="content_apis.tpf">

            <boxes
                :lang="globalState.lang"
                :content="content_apis.tpf"
                :img="img.search"
                :page="page">
            </boxes>
                
        </boxes_link>
            
        <p class="ods-container__description">
            
            {{ content_apis.descTop[globalState.lang] }}
        
        </p>
        
    </div>

</template>

<script>
import { setMetas } from '../../js/util';
import { mapGetters } from 'vuex';

import search from '../../assets/img/ODS_logo_api_search.svg';

export default {
    name: 'home',
    props: ['slideOut'],
    data: function() {
        return {
            img : {
                search: search,
            }
        }
    },
    computed: {
        ...mapGetters([
            'globalState',
            'metas',
            'content_apis'
        ]),
        page: function() {
            return this.$route.name;
        }
    },
    methods: {
        setHomeMetas: function () {
            setMetas({
                title:          this.metas.apis.title[this.globalState.lang],
                description:    this.metas.apis.description[this.globalState.lang],
                image:          this.metas.apis.image[this.globalState.lang],
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

.ods-container__description {
    margin: 0;
    color: @blue-dark;
    &:first-child {
        margin-bottom: 40px;
    }
    @media (max-width: @mobile-width) {
        text-align: center;
        &:last-child {
            margin-bottom: 40px;
        }
    }
    @media (min-width: @desktop-width) {
        
    }
}

</style>
