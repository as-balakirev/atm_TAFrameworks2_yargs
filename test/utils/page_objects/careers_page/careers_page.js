const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection.js");
const logger = require("../../../config/logger.config.js");
const {Key} = require("selenium-webdriver");

class CareersPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.epam.com/careers';
    }
    open() {
        return super.open(this.url);
    }
    getJobInput() {
        logger.info(`Populating "JobInput" field with text`)
        return new Element('Job Input', 'input.recruiting-search__input');
    }
    jobInputAction() {
        let jobInput = element(by.css('#new_form_job_search_1445745853_copy-keyword'));
        logger.info(`Populating "JobInput" field with text`)
        browser.actions().click(jobInput).sendKeys(Key.SHIFT + 'automated ').keyUp(Key.SHIFT).sendKeys('testing ').sendKeys(Key.SHIFT + 'engineer').perform();
    }
    getLocationList() {
        logger.info(`Selecting "Location List" dropdown`);
        return new Element('Location list', '//span[@class="select2-selection__arrow"]', true);
    }
    clickLocationListAction() {
        let locationList = element(by.xpath('//span[@class="select2-selection__arrow"]'));
        logger.info(`Clicking to "Location List" dropdown`);
        browser.actions().click(locationList).perform();
    }
    selectLocationByText(location) {
        logger.info(`Selecting location with text "${location}"`);
        return new Element('location', `//li[text()='${location}']`, true).click();
    }
    clickFindButton() {
        logger.info('Clicking "Find" button');
        return new Element('FInd button', '//button[@type="submit"]', true).click();
    }
    clickFindButtonAction() {
        let findButton = element(by.xpath('//button[@type="submit"]'));
        logger.info('Clicking "Find" button');
        browser.actions().click(findButton).perform();
    }
    getPositions() {
        return new Collection('search results', 'ul > li.search-result__item');
    }


}

module.exports = CareersPage;