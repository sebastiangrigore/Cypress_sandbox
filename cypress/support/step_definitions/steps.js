const { Then, When } = require('cypress-cucumber-preprocessor/steps');

import MainPage from "../MainPage"

When('I login', () => {
    cy.visit('https://dv5.tkmaxx.com/uk/en/home/home-accessories/footstools+side-tables/grey-padded-footstool/p/69010131')
    // cy.get('#addToCartButton').click()
    // cy.intercept('add').as('add')
    // cy.wait('@add').its('response.body').should('have.length', 3)

    cy.intercept('/add', (req) => {
        req.reply((res) => {
            // the response will not be sent to the browser until 'waitForSomething()' resolves
            return cy.get('#addToCartButton').click()
        })
    })

})

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

export default MainPage;


