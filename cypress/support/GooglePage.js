class GooglePage {
  static visit(url) {
    cy.visit(url);
  };

  static search(value) {
    cy.get('.gLFyf').type(value);
  };

  static clickFeelLucky() {
    cy.get('.FPdoLc > center > .RNmpXc').click();
  }

}

export default GooglePage;