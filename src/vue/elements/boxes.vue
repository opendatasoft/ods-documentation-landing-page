<template>

    <router-link :to="content.url[lang]"
        class="ods-link-documentation"
        id="index-href-platform">

        <div class="ods-container__box"
            :class="sizeBox">
            
            <div class="ods-container__box-icon">
                
                <img :class="sizeIcon"
                    :src="img"
                    alt="OpenDataSoft Documentation"/>

            </div>
            
            <div class="ods-container__box-desc">
                
                <h2 class="ods-container__box-desc-h2"
                    id="index-title-platform">
                    {{ content.title[lang] }}
                </h2>

                <p class="ods-container__box-desc-p"
                    id="index-desc-platform"
                    v-if="page === 'home'">
                    {{ content.desc[lang] }}
                </p>
                <p class="ods-container__box-desc-p"
                    id="index-desc-platform"
                    v-else>
                    <span v-html=content.desc[lang]></span>
                </p>

            </div>

        </div>

    </router-link>
    
</template>

<script>
export default {
    name: 'boxes',
    props: ['lang', 'content', 'img', 'page'],
    computed: {
        sizeBox: function () {
            if (this.page === 'home') return 'ods-container__box-index';
            else return 'ods-container__box-apis';
        },
        sizeIcon: function () {
            if (this.page === 'home') return 'ods-container__box-icon-img';
            else return 'ods-container__box-icon-img-apis';
        }
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.ods-link-documentation {
    text-decoration: none;
}

.ods-container__desc-top {
    @media (max-width: @box-max-width) {
        padding: 15px 40px 15px 40px;
    }
    @media (min-width: @box-max-width) and (max-width: @mobile-width) {
        padding: 20px 150px 30px 150px;
    }
    @media (min-width: @desktop-width) {
        padding: 35px 43px 0 43px;
    }
}

.ods-container__desc-bottom {
    @media (max-width: @box-max-width) {
        padding: 0 40px 0 40px;
        margin-bottom: 105px;
    }
    @media (min-width: @box-max-width) and (max-width: @mobile-width) {
        padding: 5px 150px 0 150px;
        margin-bottom: 120px;
    }
    @media (min-width: @desktop-width) {
        padding: 5px 43px 0 43px;
    }
}

.ods-container__desc-p {
    color: @blue-dark;
    margin: 0;
}

.ods-container__box {
    &:extend(.default-box);
    @media (max-width: @box-max-width) {
        width: 90%;
    }
    @media (min-width: @box-max-width) and (max-width: @mobile-width) {
        width: 330px;
    }
    @media (min-width: @desktop-width) {
        width: 330px;
        &:hover {
            background-color: white;
            border: 1px solid lighten(@grey-border, 40%);
            -webkit-box-shadow: 0px 10px 26px 5px lighten(@grey-border, 15%);
            -moz-box-shadow: 0px 10px 26px 5px lighten(@grey-border, 15%);
            box-shadow: 0px 10px 26px 5px lighten(@grey-border, 15%);
        }
    }
}

.ods-container__box-index {
    @media (max-width: @box-max-width) {
        height: 200px;
    }
    @media (min-width: @box-max-width) and (max-width: @mobile-width) {
        height: 180px;
    }
    @media (min-width: @desktop-width) {
        height: 150px;
    }
}

.ods-container__box-apis {
    @media (max-width: @box-max-width) {
        height: 120px;
    }
    @media (min-width: @box-max-width) and (max-width: @mobile-width) {
        height: 110px;
    }
    @media (min-width: @desktop-width) {
        height: 80px;
    }
}

.ods-container__box-icon {
    width: auto;
    display: flex;
    margin: auto 0;
}

.ods-container__box-icon-img {
    margin: 0;
    height: 80px;
}

.ods-container__box-icon-img-apis {
    margin: 0 20px;
    height: 60px;
}

.ods-container__box-desc {
    width: auto;
    margin: auto 0;
}

.ods-container__box-desc-h2 {
    font-size: 18px;
    color: @blue-dark;
    margin: 0;
}

.ods-container__box-desc-p {
    color: @blue-dark;
    margin: 15px 0 0 0;
}

</style>