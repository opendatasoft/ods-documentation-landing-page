<template>

    <div class="ods-container">
            
        <boxes :lang="lang"
            :trad="trad.platform"
            :img="img.platform"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"/>

        <boxes :lang="lang"
            :trad="trad.discovery"
            :img="img.discovery"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"/>

        <boxes :lang="lang"
            :trad="trad.faq"
            :img="img.faq"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"/>

        <boxes :lang="lang"
            :trad="trad.widgets"
            :img="img.widgets"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"/>

        <boxes :lang="lang"
            :trad="trad.tutorial"
            :img="img.tutorial"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"/>

        <boxes :lang="lang"
            :trad="trad.apis"
            :img="img.api"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"/>

        <div class="ods-container__support">
            <p v-html="trad.descBottom[lang]"></p>
        </div>

    </div>

</template>

<script>
import { setMetas } from '../../utils';

//- Traductions
import tradHome from '../../traductions/home';

//- Components
import boxes from '../elements/boxes.vue';

//- Images
import platform from '../../assets/img/ODS_picto_platform.svg';
import discovery from '../../assets/img/ODS_picto_discovery.svg';
import faq from '../../assets/img/ODS_picto_faq.svg';
import widgets from '../../assets/img/ODS_picto_widget.svg';
import tutorial from '../../assets/img/ODS_picto_tuto.svg';
import api from '../../assets/img/ODS_picto_api.svg';

export default {
    name: 'home',
    components: {
        'boxes': boxes
    },
    data: function() {
        return {
            trad: tradHome,
            img: {
                platform: platform,
                discovery: discovery,
                faq: faq,
                widgets: widgets,
                tutorial: tutorial,
                api: api
            },
            classSizeBox: 'ods-container__box-index',
            classSizeIcon: 'ods-container__box-icon-img'
        }
    },
    props: {
        lang: String
    },
    methods: {
        setHomeMetas: function () {
            setMetas({
                title:          this.trad.metas.title[this.lang],
                description:    this.trad.metas.description[this.lang],
                image:          this.trad.metas.image[this.lang],
                lang:           this.lang
            });
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.setHomeMetas();
        });
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

.ods-container__support {
    @media (max-width: @mobile-width) {
        text-align: center;
        margin: 0 10px 30px 10px;
    }
    @media (min-width: @desktop-width) {
        margin: 0 0 30px 0;
    }
}

</style>
