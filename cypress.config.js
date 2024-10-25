const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 900,
  viewportWidth: 1400,
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://merchantweb.dev.merchant.qliro.com/",
    specPattern: ["cypress/e2e/*.js"],
    testIsolation: false,
    supportFile: false,
  },
});
