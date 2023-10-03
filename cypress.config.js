const { defineConfig } = require("cypress");
// const {xpathConfig} = require('cypress-xpath');

// xpathConfig({
//   blacklist: [],
//   whiteList: [],
//   attribute: false,
//   failOnNonExistent: true,
// });

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
