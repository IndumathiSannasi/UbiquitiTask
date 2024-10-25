export default class inventoryPage {
  getshoppingcart() {
    return cy.get("#shopping_cart_container");
  }
  getShoppingCartBadge() {
    return cy.get('[data-test="shopping-cart-badge"]');
  }
  getSortingComponent() {
    return cy.get('[data-test="product-sort-container"]');
  }
  getInventoryList() {
    return cy.get('[data-test="inventory-list"]');
  }
  getInventoryItem() {
    return cy.get('[data-test="inventory-item"]');
  }
  getAddToCartButton() {
    return cy.get(".btn_primary").click();
  }
  getContinueShoppingButton() {
    return cy.get('[data-test="continue-shopping"]').click();
  }
  getCartItems() {
    return cy.get(".cart_item");
  }
  getCheckoutButton() {
    return cy.get('[data-test="checkout"]');
  }
}
