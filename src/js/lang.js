var store =  {
    debug: true,
    state: {
        lang: ''
    },
    setState (value) {
        this.state.lang = value;
    }
};

module.exports = store;