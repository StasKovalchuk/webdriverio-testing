class DocsPage {

    get editButton() {
        return $('.slidingNav [href="/docs/gettingstarted.html"]')
    }

    clickEditButton () {
        this.editButton.click();
    }

}

module.exports = new DocsPage()