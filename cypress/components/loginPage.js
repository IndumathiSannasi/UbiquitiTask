export default class loginPage {
  getUserNameTextbox() {
    return cy.get("#user-name");
  }

  getPasswordTextbox() {
    return cy.get("#password");
  }

  getLoginbutton() {
    return cy.get("#login-button");
  }

  getErrorMessageContainer() {
    return cy.get(".error-message-container");
  }

  getErrorCloseButton() {
    return cy.get('[data-test="error-button"]');
  }
}
