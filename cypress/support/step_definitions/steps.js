const { Given, When, Then } = require('cypress-cucumber-preprocessor/steps');

import MainPage from "../MainPage"


When('I visit {string}', (url) => {
    MainPage.visit(url);
})

When('I search for {string}', (value) => {
    MainPage.search(value)
})

When('I click I feel lucky', () => {
    MainPage.clickFeelLucky();
})

When('I open the page', () => {
    MainPage.openThePage();
})

Then('I verify the title contains {string}', (value) => {
    MainPage.verifyElementContainsString(value)
})

Given('I click on {string}', (value) => {
    MainPage.clickElement(value)
})

export default MainPage;


