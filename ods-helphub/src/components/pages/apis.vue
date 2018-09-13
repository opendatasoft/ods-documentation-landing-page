<template>

    <div class="ods-container">

        <p class="ods-container__description">
            
            {{ trad.descTop[lang] }}
            
        </p>
         
        <boxes :lang="lang"
            :trad="trad.searchv1"
            :img="img.search"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="true"/>
        
        <boxes :lang="lang"
            :trad="trad.searchv2"
            :img="img.search"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="true"/>

        <boxes :lang="lang"
            :trad="trad.csw"
            :img="img.csw"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIconSmall"
            :isHref="true"/>

        <boxes :lang="lang"
            :trad="trad.wfs"
            :img="img.wfs"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIconSmall"
            :isHref="true"/>

        <boxes :lang="lang"
            :trad="trad.odata"
            :img="img.odata"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"
            :isHref="true"/>

        <boxes :lang="lang"
            :trad="trad.tpf"
            :img="img.tpf"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIconMedium"
            :isHref="true"/>
                
        <p class="ods-container__description">
            
            {{ trad.descBottom[lang] }}
        
        </p>
        
    </div>

</template>

<script>
import { setMetas } from '../../utils';

//- Traductions
import tradApis from '../../translations/apis';

//- Components
import boxes from '../elements/boxes.vue';

//- Images
import search from '../../assets/img/ODS_logo_api_search.svg';
import csw from '../../assets/img/ODS_logo_CSW.svg';
import wcs from '../../assets/img/ODS_logo_WCS.svg';
import wfs from '../../assets/img/ODS_logo_WFS.svg';
import odata from '../../assets/img/ODS_logo_odata.svg';
import tpf from '../../assets/img/ODS_logo_TPF.svg';

export default {
    name: 'apis',
    components: {
        'boxes': boxes
    },
    data: function() {
        return {
            trad: tradApis,
            img: {
                search: search,
                csw: csw,
                wcs: wcs,
                wfs: wfs,
                odata: odata,
                tpf: tpf
            },
            classSizeBox: 'ods-container__box-apis',
            classSizeIcon: 'ods-container__box-icon-img-apis',
            classSizeIconSmall: 'ods-container__box-icon-img-small',
            classSizeIconMedium: 'ods-container__box-icon-img-medium'
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

.ods-container {
    &:extend(.default-container);
}

.ods-container__description {
    color: @blue-dark;
    &:first-child,
    &:last-child {
        margin-bottom: 40px;
    }
    @media (max-width: @mobile-width) {
        margin: 0 15px;
        text-align: center;
    }
    @media (min-width: @desktop-width) {
        text-align: initial;
        margin: 0 5px;
    }
}

</style>
