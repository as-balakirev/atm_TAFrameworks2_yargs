const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");
const logger = require("../../../config/logger.config.js");

class HowWeDoItPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.epam.com/how-we-do-it';
    }
    open() {
        return super.open(this.url);
    }
    scrollToElementExecutor(element) {
        logger.info(`Scrolling to the featured article #2 element`);
        browser.executeScript('arguments[0].scrollIntoView();', element);
    }
    clickExecutor(element) {
        logger.info(`Clicking on the featured article #2 element`);
        browser.executeScript('arguments[0].click();', element);
    }
}

module.exports = HowWeDoItPage;