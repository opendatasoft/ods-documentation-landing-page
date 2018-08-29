<template>
    
    <div class="page-not-found__wrapper">
 
        <div class="page-not-found__404">
            404
        </div>

        <div class="page-not-found__text">
            {{ trad.message404[lang] }}
        </div>

        <router-link :to="{ name: 'home', params: { lang: lang }}"
            class="page-not-found__get-back-link">
            {{ trad.backHome[lang] }}
        </router-link>

    </div>
    
</template>

<script>
import { setMetas } from '../../utils';

//- Traductions
import trad404 from '../../translations/not-found';

export default {
    name: 'not-found',
    data: function () {
        return {
            trad: trad404
        }
    },
    props: {
        lang: String
    },
    beforeRouteEnter (to, from, next) {
        next((vm) => {
            setMetas({
                title:         vm.trad.metas.title[vm.lang],
                description:   vm.trad.metas.description[vm.lang],
                lang:          vm.lang
            });
        });
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.page-not-found__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
}

.page-not-found__404 {
    font-size: 100px;
}

.page-not-found__text {
    font-size: 25px;
    margin-bottom: 80px;
}

.page-not-found__get-back-link {
    background-color: @blue-medium;
    color: white;
    padding: 10px 20px;
    border-radius: 3px;
    font-weight: 500;
    margin: 0;
}

</style>
