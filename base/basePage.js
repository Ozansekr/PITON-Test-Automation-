var webdriver = require('selenium-webdriver');
const {
    By
} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
var assert = require("assert");
const {
    elementIsVisible,
    elementIsDisabled
} = require('selenium-webdriver/lib/until');
driver.manage().setTimeouts({
    implicit: (10000)
});


class BasePage {
    constructor() {
        global.driver = driver;
    }
    async go_to_url() {
        await driver.get("https://e2e-assessment.piton.com.tr");
    }
    async enterTextByCss(css, searchText) {
        await driver.findElement(By.css(css)).sendKeys(searchText);
    }
    async clickById(id) {
        await driver.findElement(By.id(id)).click();
    }

    async clickByClassName(className) {
        await driver.findElement(By.className(className)).click();
    }

    async sendKey(id, text) {
        await driver.findElement(By.id(id)).sendKeys(text);
    }

    async clear(id) {
        driver.findElement(By.id(id)).clear();
    }

    async shouldBe(cssSelector, status) {
        const element = await driver.findElement(By.css(cssSelector)).isDisplayed();
        assert.equal(status, element);
    }

    async closeBrowser() {
        await driver.quit();
    }
}

module.exports = BasePage;