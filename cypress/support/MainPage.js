class MainPage {
  static visit(url) {
    cy.visit(url);
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
    cy.get(element).click();
  }

}

export default MainPage;