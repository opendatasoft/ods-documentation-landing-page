<template>

    <div class="ods-container">
         
        <boxes :lang="lang"
            :trad="trad.widgets"
            :img="img.widgets"
            :sizeBox="classSizeBox"
            :sizeIcon="classSizeIcon"/>
        
    </div>

</template>

<script>
import { setMetas } from '../../utils';

//- Traductions
import tradTutorials from '../../translations/tutorials';

//- Components
import boxes from '../elements/boxes.vue';

//- Images
import widgets from '../../assets/img/ODS_picto_tuto.svg';

export default {
    name: 'tutorials',
    components: {
        'boxes': boxes
    },
    data: function() {
        return {
            trad: tradTutorials,
            img: {
                widgets: widgets
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
