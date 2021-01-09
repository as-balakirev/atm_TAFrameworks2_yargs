const {expect} = require("chai");
const PageFactory = require("../utils/page_objects/pageFactory");
const {protractor, browser, Key} = require('protractor');
const EC = protractor.ExpectedConditions;

describe('simple test using js executor',  function() {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    it('should scroll down, click element', async function() {
        await PageFactory.getPage('How We Do It').open();
        let el = browser.element(by.css('li.featured-content-card--block-2 a'));
        await PageFactory.getPage('How We Do It').scrollToElementExecutor(el);
        await PageFactory.getPage('How We Do It').wait(1000);
        await PageFactory.getPage('How We Do It').clickExecutor(el);
        await PageFactory.getPage('How We Do It').wait(3000);
    });
});