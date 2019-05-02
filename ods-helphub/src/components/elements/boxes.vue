<template>

    <component class="ods-container__link"
        :class="sizeBox"
        :is="attributId"
        v-bind="hrefLink">

        <div class="ods-container__box"
            :class="sizeBox">
            
            <div class="ods-container__box-icon">
                
                <img :class="sizeIcon"
                    :src="img"
                    :alt="'OpenDataSoft ' + trad.title[lang] + ' icon'"/>

            </div>
            
            <div class="ods-container__box-desc">
                
                <h2 class="ods-container__box-desc-h2"
                    id="index-title-platform">
                    {{ trad.title[lang] }}
                </h2>

                <p class="ods-container__box-desc-p"
                    id="index-desc-platform"
                    v-html=trad.desc[lang]>
                </p>

            </div>

        </div>

    </component>

</template>

<script>
export default {
    name: 'boxes',
    data: function () {
        return {
            attributId: this.isHref ?
                'a' :
                'router-link' 
        }
    },
    computed: {
        hrefLink: function () {
            return this.isHref ?
                { href : this.trad.url[this.lang] } :
                { to : this.trad.url[this.lang] };
        }
    },
    props: {
        lang: String,
        trad: Object,
        img: String,
        sizeBox: String,
        sizeIcon: String,
        isHref: Boolean
    }
}
</script>

<style lang='less'>
@import "../../assets/less/variables";
@import "../../assets/less/components";

.ods-container__link {
    display: inline-block;
}

.ods-container__box {
    width: @box-width;
    height: @box-height;
    padding: @spacing-200;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid @grey-border;
    background-color: @grey-bg;
    border-radius: 4px;
    transition: 0.5s;


    @media (min-width: @desktop-width) {
        /*width: 330px;*/
        &:hover {
            -webkit-box-shadow: 0px 0px 10px 0px tint(@grey-border, 15%);
            -moz-box-shadow: 0px 0px 10px 0px tint(@grey-border, 15%);
            box-shadow: 0px 0px 10px 0px tint(@grey-border, 15%);
        }
    }
}

.ods-container__link {
    margin-right: @spacing-100;
    margin-left: @spacing-100;
    margin-bottom: @spacing-200;
}

.ods-container__box-index {
    min-height: 155px;
}

.ods-container__box-apis {
    min-height: 80px;
}

.ods-container__box-icon {
}

//- IE 10 / 11
/*@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {*/
    /*.ods-container__box-icon {*/
        /*width: 65px;*/
    /*}*/
/*}*/

.ods-container__box-icon-img {
    margin: 0;
    margin-right: @spacing-200;
    width: 65px;
    height: auto;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-icon-img {
        height: 90px;
        margin: auto 0;
        width: auto;
    }
    *::-ms-backdrop, .ods-container__box-icon-img {
        width: auto;
    }
}

.ods-container__box-icon-img-apis {
    margin: 0 20px;
    height: 60px;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-icon-img-apis {
        height: 70px;
        margin: auto 20px;
        width: auto;
    }
    *::-ms-backdrop, .ods-container__box-icon-img-apis {
        width: 70px;
    }
}

.ods-container__box-icon-img-small {
    margin: 0 20px;
    height: 27px;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-icon-img-small {
        margin: auto 20px;
        height: 35px;
        width: auto;
    }
}

.ods-container__box-icon-img-medium {
    margin: 0 20px;
    height: 38px;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-icon-img-medium {
        margin: auto 20px;
        height: 45px;
        width: auto;
    }
}

.ods-container__box-desc {
    width: auto;
    margin: 0;
    color: @light-600;
    font-size: 1rem;
    line-height: 1.4;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-desc {
        margin: auto 0;
    }
}

.ods-container__box-desc-h2 {
    font-size: 1.44rem;
    font-weight: normal;
    line-height: 1.3;
    color: @light-700;
    margin: 0;
    margin-bottom: @spacing-100;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-desc-h2 {
        width: 180px;
    }
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-desc-p {
        width: 200px;
    }
}

</style>