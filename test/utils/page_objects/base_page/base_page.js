const Header = require('./header');
const logger = require('../../../config/logger.config.js');

class BasePage {
    constructor() {
        this.Header = new Header();
    };
    wait(waitInMilliseconds) {
        logger.debug(`Waiting "${waitInMilliseconds}" milliseconds`);
        return browser.sleep(waitInMilliseconds);
    };
    async getCurrenUrl() {
        const currentUrl = browser.getCurrentUrl();
        return currentUrl;
    };
    open(url) {
        logger.info(`Opening "${url}" URL`);
        return browser.get(url);
    };
};

module.exports = BasePage;