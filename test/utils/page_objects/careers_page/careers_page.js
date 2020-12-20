const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");
const Collection = require("../base_elements/base_collection.js");

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
    getLocationList() {
        return new Element('Location list', '//span[@class="select2-selection__arrow"]', true);
    }
    getLocationListExpanded() {
        return new Element ('Expanded Location List', '//ul[@class="select2-results__options open"][@aria-expanded="true"]', true);
    }
    selectLocationByText(location) {
        return new Element('location', `//li[text()='${location}']`, true).click();
    }
    clickFindButton() {
        return new Element('FInd button', '//button[@type="submit"]', true).click();
    }
    getPositions() {
        return new Collection('search results', 'ul > li.search-result__item');
    }


}

module.exports = CareersPage;