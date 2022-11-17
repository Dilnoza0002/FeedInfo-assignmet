const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    loginURL: "https://www.feedinfo.com/login-page",
    searchURL: "https://www.feedinfo.com/search",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
