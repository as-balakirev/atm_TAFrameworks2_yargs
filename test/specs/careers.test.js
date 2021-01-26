const {expect} = require("chai");
const PageFactory = require("../utils/page_objects/pageFactory");
const {protractor, browser, Key} = require('protractor');
const EC = protractor.ExpectedConditions;
const yargs = require('yargs').argv;

describe('test scenario for CAREER page',  function() {

    beforeEach(function () {
        browser.waitForAngularEnabled(false);
        return browser.manage().window().maximize();
    });

    it('should find available position in Vitebsk', async function() {
        await PageFactory.getPage('Careers').open();
        await PageFactory.getPage('Careers').getJobInput().sendKeys('Automated Testing Engineer');
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').getLocationList().click();
        await PageFactory.getPage('Careers').wait(1000);
        await PageFactory.getPage('Careers').selectLocationByText('Vitebsk');
        await PageFactory.getPage('Careers').clickFindButton();
        await PageFactory.getPage('Careers').wait(3000);
        const positions = await PageFactory.getPage('Careers').getPositions().getTexts();
        expect(positions[0]).to.include('Automated Testing Engineer\nVITEBSK, BELARUS');
    });
});

