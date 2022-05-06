class MainPage {

    get searchInput() {
        return $('#search_input_react')
    }

    setUserName (value) {
        this.searchInput.addValue(value)
    }

}

module.exports = new MainPage()