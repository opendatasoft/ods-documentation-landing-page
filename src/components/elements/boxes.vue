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
    @media (max-width: @box-max-width) {
        display: block;
        margin: 0 auto 40px auto;
        width: 90%;
    }
    @media (min-width: @box-max-width) and (max-width: @mobile-width) {
        display: block;
        margin: 0 auto 40px auto;
        width: 350px;
    }
    @media (min-width: @desktop-width) {
        width: 350px;
        margin: 0 0 40px 0;
    }
    @media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
        float: left;
    }
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
    min-height: 155px;
}

.ods-container__box-apis {
    min-height: 80px;
}

.ods-container__box-icon {
    width: auto;
    display: flex;
    margin: auto 0;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-icon {
        width: 130px;
    }
}

.ods-container__box-icon-img {
    margin: 0;
    height: 80px;
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
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-desc {
        margin: auto 0;
    }
}

.ods-container__box-desc-h2 {
    font-size: 18px;
    color: @blue-dark;
    margin: 0;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-desc-h2 {
        width: 180px;
    }
}

.ods-container__box-desc-p {
    color: @blue-dark;
    margin: 15px 0 0 0;
}

//- IE 10 / 11
@media all and (-ms-high-contrast: active), (-ms-high-contrast:none) {
    .ods-container__box-desc-p {
        width: 200px;
    }
}

</style>