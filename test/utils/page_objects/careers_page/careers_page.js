const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection.js");
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
        return new Element('Job Input', 'input.recruiting-search__input');
    }
    jobInputAction() {
        let jobInput = element(by.css('#new_form_job_search_1445745853_copy-keyword'));
        browser.actions().click(jobInput).sendKeys(Key.SHIFT + 'automated ').keyUp(Key.SHIFT).sendKeys('testing ').sendKeys(Key.SHIFT + 'engineer').perform();
    }
    getLocationList() {
        return new Element('Location list', '//span[@class="select2-selection__arrow"]', true);
    }
    clickLocationListAction() {
        let locationList = element(by.xpath('//span[@class="select2-selection__arrow"]'));
        browser.actions().click(locationList).perform();
    }
    selectLocationByText(location) {
        return new Element('location', `//li[text()='${location}']`, true).click();
    }
    clickFindButton() {
        return new Element('FInd button', '//button[@type="submit"]', true).click();
    }
    clickFindButtonAction() {
        let findButton = element(by.xpath('//button[@type="submit"]'));
        browser.actions().click(findButton).perform();
    }
    getPositions() {
        return new Collection('search results', 'ul > li.search-result__item');
    }


}

module.exports = CareersPage;