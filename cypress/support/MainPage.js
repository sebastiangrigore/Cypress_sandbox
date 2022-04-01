class MainPage {
  static visit(url) {
    cy.visit(url).debug()
  }

  static search(value) {
    cy.get('#searchInput').type(value);
    cy.get('.pure-button').click();
  }

  static clickFeelLucky() {
    cy.get('.FPdoLc > center > .RNmpXc').click();
  }

  static openThePage() {
    cy.get('b > a').click();
  }

  static verifyElementContainsString(value) {
    cy.get('#firstHeading').contains(value)
  }

  static clickElement(element) {
    if (element.includes('//')) {
      cy.xpath(element).first().click();
    } else cy.get(element).get().first().click();
    cy.get(element).should('have')
  }

}

export default MainPage;