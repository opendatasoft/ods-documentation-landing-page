<template>

    <div class="ods-container">

        <boxes :lang="lang"
            :trad="trad.userguide"
            :img="img.userguide"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="true"/>

        <boxes :lang="lang"
            :trad="trad.academy"
            :img="img.codelibrary"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="true"/>

        <boxes :lang="lang"
            :trad="trad.inspiration"
            :img="img.codelibrary"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="true"/>

        <boxes :lang="lang"
            :trad="trad.codelibrary"
            :img="img.codelibrary"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="true"/>

        <boxes :lang="lang"
            :trad="trad.widgets"
            :img="img.widgets"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="true"/>

        <boxes :lang="lang"
            :trad="trad.apis"
            :img="img.api"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="false"/>

        <boxes :lang="lang"
            :trad="trad.support"
            :img="img.support"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="true"/>

    </div>

</template>

<script>
import { setMetas } from '../../utils';

//- Traductions
import tradHome from '../../translations/home';

//- Components
import boxes from '../elements/boxes.vue';

//- Images
import platform from '../../assets/img/ODS_picto_platform.svg';
import codelibrary from '../../assets/img/ODS_picto_codelibrary.svg';
import faq from '../../assets/img/ODS_picto_faq.svg';
import widgets from '../../assets/img/ODS_picto_widget.svg';
import api from '../../assets/img/ODS_picto_api.svg';
import support from '../../assets/img/ODS_logo_support.svg';

export default {
    name: 'home',
    components: {
        'boxes': boxes
    },
    data: function() {
        return {
            trad: tradHome,
            img: {
                userguide: platform,
                codelibrary: codelibrary,
                faq: faq,
                widgets: widgets,
                api: api,
                support: support
            },
            classSizeBox: 'ods-container__box-index',
            classSizeIcon: 'ods-container__box-icon-img'
        }
    },
    props: {
        lang: String
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            setMetas({
                title:          vm.trad.metas.title[vm.lang],
                description:    vm.trad.metas.description[vm.lang],
                image:          vm.trad.metas.image[vm.lang],
                lang:           vm.lang
            });
        });
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

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
