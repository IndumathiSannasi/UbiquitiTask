import loginPage from "../../cypress/components/loginpage.js";
import inventoryPage from "../components/inventoryPage.js";
const login = new loginPage();
const inventory = new inventoryPage();
describe("Tests cases to verify the login flow", () => {
  context("Validate Login with locked_out_user", () => {
    it("Visit the saucedemo website", () => {
      cy.visit("https://www.saucedemo.com/");
    });
    it("Login with locked_out_user", () => {
      login.getUserNameTextbox().type("locked_out_user");
      login.getPasswordTextbox().type("secret_sauce");
      login.getLoginbutton().click();
    });
    it("Should throw an Error Message", () => {
      login
        .getErrorMessageContainer()
        .should("be.visible")
        .contains("Epic sadface: Sorry, this user has been locked out.");
      login.getErrorCloseButton().click();
    });
  });
  context("Validate Login with Invalid Credentials", () => {
    it("Login with wrong password", () => {
      login.getUserNameTextbox().clear().type("standard_user");
      login.getPasswordTextbox().clear().type("wrong_password");
      login.getLoginbutton().click();
    });
    it("Should throw an Error Message", () => {
      login
        .getErrorMessageContainer()
        .should("be.visible")
        .contains(
          "Epic sadface: Username and password do not match any user in this service"
        );
      login.getErrorCloseButton().click();
    });
  });
  context("Validate Login with Valid Credentials", () => {
    it("Login with valid credentials", () => {
      login.getUserNameTextbox().clear().type("standard_user");
      login.getPasswordTextbox().clear().type("secret_sauce");
      login.getLoginbutton().click();
    });
    it("Should navigate to the products page", () => {
      cy.url().should("include", "/inventory.html");
    });
  });
  context("verify headers in the page", () => {
    it("should display cart icon with 0 items", () => {
      inventory.getshoppingcart().should("be.visible");
      inventory.getShoppingCartBadge().should("not.exist");
    });
  });
});
