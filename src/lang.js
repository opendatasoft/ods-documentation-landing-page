const store =  {
    debug: true,
    state: {
        lang: ''
    },
    setState (value) {
        this.state.lang = value;
    }
};

export default store;