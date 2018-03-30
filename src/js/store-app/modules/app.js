import * as types from '../mutations-types';

//- Content trad
import content_app from '../../../content/app';
import content_home from '../../../content/home';
import content_apis from '../../../content/apis';
import content_page_not_found from '../../../content/page-not-found';

// initial state
const state = {
    //- Variable global
    globalState : {
        lang : 'en',
        loading: true
    },
    //- Content trad
    content: {
        app: {},
        home: {},
        apis: {},
        page_not_found: {}
    },
    //- Metas
    metas : {
        home : {},
        apis : {},
        page_not_found : {}
    }
}

// getters
const getters = {
    //- Variable global
    globalState : state => state.globalState,
    //- Metas
    metas : state => state.metas,
    //- Content trad
    content_app : state => state.content.app,
    content_home : state => state.content.home,
    content_apis: state => state.content.apis,
    content_page_not_found : state => state.content.page_not_found
}

// actions
const actions = {
    //- GlobalState
    set_lang ({ commit }, payload) {
        commit(types.SET_LANG, payload);
    },
    //- Content trad
    load_store_content ({ commit }) {
        commit(types.LOAD_STORE_CONTENT);
        commit(types.LOAD_STORE_METAS);
    }
}

// mutations
const mutations = {
    //- GlobalState
    [types.SET_LOADING_STATE] (state, payload) {
        state.globalState.loading = payload;
    },
    [types.SET_LANG] (state, payload) {
        if (!payload) state.globalState.lang = 'en';
        else state.globalState.lang = payload;
    },
    //- Content trad
    [types.LOAD_STORE_CONTENT](state) {
        state.content.app = content_app;
        state.content.home = content_home;
        state.content.apis = content_apis;
        state.content.page_not_found = content_page_not_found;
    },
    //- Metas
    [types.LOAD_STORE_METAS] (state) {
        state.metas.home = {
            title :         state.content.home.titleMeta,
            description :   state.content.home.descriptionMeta,
            image :         state.content.home.imageMeta
        }
        state.metas.apis = {
            title :         state.content.apis.titleMeta,
            description :   state.content.apis.descriptionMeta,
            image :         state.content.apis.imageMeta
        },
        state.metas.page_not_found = {
            title :         state.content.page_not_found.titleMeta,
            description :   state.content.page_not_found.descriptionMeta
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
