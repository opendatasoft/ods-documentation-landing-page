<template>
    <div>
        <div :class="['overlay', { 'isActive' : slideOut }]" @click="closeSlideOut()">
            <div class="slideout__container" @click.stop>
                <div class="slideout__content" :class="{ 'isOpen' : slideOut }">
                    <div class="slideout__close-btn-wrapper">
                        <div class="slideout__lang-link-wrapper">
                            <router-link :to="langLink('en')">
                                <span class="slideout__lang-link" :aria-label="content.langLabelEn[lang]"> EN </span>
                            </router-link>
                            <router-link :to="langLink('fr')">
                                <span class="slideout__lang-link" :aria-label="content.langLabelFr[lang]"> FR </span>
                            </router-link>
                        </div>
                        <button type="button" class="slideout__close-btn" @click="closeSlideOut()" :aria-label="content.sidebarCloseBtnArialLabel[lang]">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </button>
                    </div>
                    <router-link :to="{ name: 'home' }">
                        <div class="slideout__nav-bar-item-container">
                            <div class="slideout__nav-bar-item-content">
                                <i class="fa fa-home fa-2x" aria-hidden="true"></i>
                            </div>
                            <div class="slideout__nav-bar-item-content">
                                {{ content.homeLabel[lang] }}
                            </div>
                        </div>
                    </router-link>
                    <router-link :to="{ name: 'about' }">
                        <div class="slideout__nav-bar-item-container">
                            <div class="slideout__nav-bar-item-content">
                                <i class="fa fa-plus fa-2x" aria-hidden="true"></i>
                            </div>
                            <div class="slideout__nav-bar-item-content">
                                {{ content.aboutLabel[lang] }}
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'app_header__slideout',
    props: ['content', 'slideOut', 'lang'],
    methods: {
        closeSlideOut() {
            this.$emit('close_slide_out');
        },
        langLink: function (lang) {
            var data = { params: { lang: lang } };
            return data;
        }
    },
    mounted: function () {
        $(window).resize(() => {
            if ( this.slideOut && $(window).width() > 980 ) {
                this.closeSlideOut();
            }
        });
    },
    watch: {
        '$route': function () {
            this.closeSlideOut();
        }
    }
}
</script>

<style lang='less'>

</style>
