const {expect} = require("chai");
const webDriver = require('selenium-webdriver');

describe('selenium grid test suite',  function() {
    let driver;
    beforeEach(function () {
        driver = new webDriver.Builder()
            .usingServer('http://localhost:4444/wd/hub')
            .withCapabilities(webDriver.Capabilities.chrome())
            .build();
    });
    after(function() {
        driver.quit();
    });
    it('should have an official EPAM site title', function() {
        driver.get('https://www.epam.com')
            .then(() => driver.executeScript('return document.title'))
            .then((documentTitle) => expect(documentTitle).to.be.equal('EPAM | Enterprise Software Development, Design & Consulting'));
    });
    it('should have a correct host', function () {
        driver.get('https://www.epam.com')
            .then(() => driver.executeScript('return document.location.host'))
            .then((host) => expect(host).to.be.equal('www.epam.com'));
    });
});