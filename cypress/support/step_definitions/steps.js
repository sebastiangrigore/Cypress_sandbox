const { Then, When } = require('cypress-cucumber-preprocessor/steps');

import GooglePage from "../GooglePage"

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
    GooglePage.visit(url);
})

When('I search for {string}', (value) => {
    GooglePage.search(value)
})

When('I click I feel lucky', () => {
    GooglePage.clickFeelLucky();
})

export default GooglePage;


