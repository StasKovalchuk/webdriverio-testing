const assert = require('assert');
const mainPage = require('../pageobjects/main.page.js');
const docsPage = require('../pageobjects/docs.page.js');

describe('webdriver.io page', () => {
    
    it('should have the right title', async () => {
        await browser.url('https://v5.webdriver.io/')
        const title = await browser.getTitle()
        assert.strictEqual(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js')
    })
    
    it('should demonstrate the addValue command', async () => {
        await browser.url('https://v5.webdriver.io/')
        let input = await $('#search_input_react')
        await input.addValue('test')
        await browser.pause(2000);
        await input.addValue(123)
        await browser.pause(2000);

        value = await input.getValue()
        assert(value === 'test123') //true
    })

    it('should demonstrate setValue command', async function () {
        await browser.url('https://v5.webdriver.io/');
        const elem = await $('#search_input_react');
        await elem.setValue('test123');
        await browser.pause(2000);
    })

    it('should demonstrate the click command', async () => {
        await browser.url('https://v5.webdriver.io/');
        const apiButton = await $('[href="/docs/api.html"]')
        await browser.pause(2000);
        await apiButton.click()
        await browser.pause(2000);
        const gideButton = await $('[href="/docs/gettingstarted.html"]')
        await gideButton.click()
        await browser.pause(2000);
    })

    it('should demonstrate the getAttribute commnad', async () => {
        await browser.url('https://v5.webdriver.io/');
        const input = await $('#search_input_react');
        let attr = await input.getAttribute('title')
        console.log("Title attribute is: " + attr) // outputs: "Search"
        
        await input.setValue('test123');
        attr = await input.getAttribute('value')
        console.log("value attribute is: " + attr) // outputs: test123
    })

    it('should demonstrate the getLocation function', async () => {
        await browser.url('https://v5.webdriver.io/');
        const logo = await $('#search_input_react')
        const location = await logo.getLocation();
        console.log(location);

        const xlocation = await logo.getLocation('x')
        console.log("xlocation: " + xlocation);
    });

    it('should demonstrate the getText function', async () => {
        await browser.url('https://v5.webdriver.io/');
        const blogButton = await $('[href="/docs/api.html"]')
        console.log("Text for element: " + blogButton.getText());
    });

    it('should detect if an element is clickable', async () => {
        await browser.url('https://v5.webdriver.io/');
        const apiButton = await $('[href="/docs/api.html"]')
        let clickable = await apiButton.isClickable();
        console.log("Is clickable?: " + clickable); // outputs: true or false
    });

    it('should detect if an element is displayed', async () => {
        await browser.url('https://v5.webdriver.io/');
        const apiButton = await $('[href="/docs/api.html"]')
        isDisplayed = await apiButton.isDisplayed();
        console.log("Is displayed?: " + isDisplayed); // outputs: true
    });

    it('should detect if an element is visible', async () => {
        await browser.url('https://v5.webdriver.io/');
        let isapiDisplayedInViewport = await $('[href="/docs/api.html"]').isDisplayedInViewport();
        console.log("isapiDisplayedInViewport: " + isapiDisplayedInViewport); // outputs: true

        let isGitHubDisplayedInViewport = await $('#footer [href="https://github.com/webdriverio/webdriverio"]').isDisplayedInViewport();
        console.log("isGitHubDisplayedInViewport: " + isGitHubDisplayedInViewport); // outputs: false
    });

    it('should detect if an element is enabled', async () => {
        await browser.url('https://v5.webdriver.io/');
        const apiButton = await $('[href="/docs/api.html"]')
        let isEnabled = apiButton.isEnabled();
        console.log("isEnabled: " + isEnabled);
    });

    it('should detect the focus of an element', async () => {
        await browser.url('https://v5.webdriver.io/');
        const input = await $("#search_input_react")
        console.log("search.isFocused() before click: " + input.isFocused());
        await browser.pause(2000)
        await input.click();
        console.log("search.isFocused() after click: " + input.isFocused());
        await browser.pause(2000);
    });

    it('should move to element', async () => {
        await browser.url('https://v5.webdriver.io/');
        const gitHubLink = await $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        await browser.pause(4000);
        await gitHubLink.scrollIntoView();
        await browser.pause(3000);
    });

    it('should save a screenshoot of the browser view', async function () {
        await browser.url('https://v5.webdriver.io/');
        const elem = await $('#footer [href="https://github.com/webdriverio/webdriverio"]');
        await elem.saveScreenshot('elemScreenshot.png');
    });

    it('should switch to another window', async () => {
        // open url
        await browser.url('https://www.google.com');
        // create new window
        await browser.newWindow('https://v5.webdriver.io/')
        await browser.pause(2000);

        // switch back via url match
        await browser.switchWindow('google.com')
        await browser.pause(2000);
        // switch back via title match
        await browser.switchWindow('Next-gen WebDriver test framework')
        await browser.pause(2000);
    });

    it('should wait until', () => {
        browser.url('https://v5.webdriver.io/');
        browser.waitUntil(() => {
            return $('[href="/docs/api.html"]').isDisplayed();
        }, 5000, 'API is not displayed');
    });

    it('should get html fro certain elements', async () => {
        await browser.url('https://v5.webdriver.io/docs/api.html');
        var outherHTML = await $('.siteNavGroupActive').getHTML();
        console.log("OutherHTML: " + outherHTML);

        var innerHTML = await $('.siteNavGroupActive').getHTML(false);
        console.log("InnerHTML: " + innerHTML);
    });

    it.only('should switch to another window', async () => {
        // open url
        await browser.url('https://google.com')
        // create new window
        await browser.newWindow('https://v5.webdriver.io/')
        await browser.pause(2000);

        // switch back via url match
        await browser.switchWindow('google.com')
        await browser.pause(2000);
        // switch back via title match
        await browser.switchWindow('Next-gen WebDriver test framework')
        await browser.pause(2000);
    });

    it.skip('should wait until text has changed', async () => {
        await browser.url('https://v5.webdriver.io/');
    });

    it('should demonstrate the addValue command', async () => {
        await browser.url('https://v5.webdriver.io/');
        await mainPage.searchInput.addValue('test');
        await browser.pause(2000);
        mainPage.setUserName("type with method");
        await browser.pause(2000);
    });

    it('should click Docs button', async () => {
        docsPage.clickEditButton();
        await browser.pause(2000);
    });

})