
const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "niadxk",
  e2e: {
    
    specPattern: 'cypress/e2e/Executables/*.js'

  },
});

//messages -> json file ->html