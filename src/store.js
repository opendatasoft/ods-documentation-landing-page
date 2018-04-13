const store =  {
    state: {
        lang: 'en'
    },
    setLang (value) {
        this.state.lang = value;
    }
};

export default store;