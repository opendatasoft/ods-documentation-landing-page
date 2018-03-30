import app from './modules/app';

const debug = process.env.NODE_ENV !== 'production';

export default {
    modules: {
        app
    },
    strict: debug
}
