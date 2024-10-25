import loginPage from "../../cypress/components/loginpage.js";
import inventoryPage from "../components/inventoryPage.js";
import checkoutPage from "../components/checkoutPage.js";
const login = new loginPage();
const inventory = new inventoryPage();
const checkout = new checkoutPage();
describe("Test cases to verify complete purchase of a product", () => {
  const cartItems = [];
  context("Add items to the cart", () => {
    before(() => {
      cy.visit("https://www.saucedemo.com/");
      login.getUserNameTextbox().clear().type("standard_user");
      login.getPasswordTextbox().clear().type("secret_sauce");
      login.getLoginbutton().click();
    });

    it("Sort on Price (low to high)", () => {
      inventory.getSortingComponent().select("Price (low to high)");
    });

    it("Add the last product to the cart", () => {
      inventory
        .getInventoryItem()
        .last()
        .find(".inventory_item_name")
        .then((productName) => {
          cartItems.push(productName.text()); // Store the product name
        });
      cy.get(".inventory_item").last().find("button").click();
    });

    it("Sort on: Name (A to Z)", () => {
      inventory.getSortingComponent().select("Name (A to Z)");
    });

    it("Add the top right product to the cart", () => {
      inventory
        .getInventoryItem()
        .first()
        .find(".inventory_item_name")
        .then((productName) => {
          cartItems.push(productName.text());
        });
      cy.get(".inventory_item").first().find("button").click();
    });

    it("Navigate to the cart", () => {
      inventory.getshoppingcart().click();
    });

    it("Validate the cart", () => {
      inventory.getCartItems().should("have.length", 2);
    });

    it("Checkout", () => {
      cy.get(".checkout_button").click();
    });

    it("Fill the form", () => {
      checkout.getUserFirstName().type("John");
      checkout.getUserLastName().type("Doe");
      checkout.getPostalCode().type("12345");
      checkout.getContinueButton().click();
    });

    it("Validate the form", () => {
      checkout.getCartItems().should("have.length", 2);
    });
    it("Verify items to purchase matches the ones put in cart", () => {
      cy.get(".inventory_item_name").each(($el, index) => {
        expect($el.text()).to.equal(cartItems[index]); // Compare each item
      });
    });
    it("Finish the purchase", () => {
      checkout.getFinishButton().click();
    });

    it("Verify the purchase was successful", () => {
      checkout
        .getOrderConfirmation()
        .should("be.visible")
        .contains("Thank you for your order!");
    });
  });
});
