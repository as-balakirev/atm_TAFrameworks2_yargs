const BasePage = require("../base_page/base_page");
const Collection = require("../base_elements/base_collection");

class HowWeDoItPage extends BasePage {
    constructor() {
        super();
        this.url = 'https://www.epam.com/how-we-do-it';
    }
    open() {
        return super.open(this.url);
    }
    scrollToElementExecutor(element) {
        browser.executeScript('arguments[0].scrollIntoView();', element);
    }
    clickExecutor(element) {
        browser.executeScript('arguments[0].click();', element);
    }
}

module.exports = HowWeDoItPage;