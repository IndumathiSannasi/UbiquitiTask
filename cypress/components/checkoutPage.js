export default class loginPage {
  getUserFirstName() {
    return cy.get("#first-name");
  }
  getUserLastName() {
    return cy.get("#last-name");
  }
  getPostalCode() {
    return cy.get("#postal-code");
  }
  getContinueButton() {
    return cy.get('[data-test="continue"]');
  }
  getCartItems() {
    return cy.get(".cart_item");
  }
  getFinishButton() {
    return cy.get('[data-test="finish"]');
  }
  getOrderConfirmation() {
    return cy.get('[data-test="complete-header"]');
  }
}
