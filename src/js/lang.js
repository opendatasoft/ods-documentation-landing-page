var store =  {
    debug: true,
    state: {
        lang: 'en'
    },
    setState (value) {
        this.state.lang = value;
    }
};

module.exports = store;