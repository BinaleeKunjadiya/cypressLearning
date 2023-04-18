
const { defineConfig } = require("cypress");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

module.exports = defineConfig({


  projectId: "niadxk",
  e2e: {
    
    specPattern: 'cypress/e2e/**/*.js',

    // Below code is to set tasks to confige fiel so that when code runs, it runs on Node level -
    //instead of browser level , because below code is pure javascript code which browse might not be able to resolve 
    setupNodeEvents(on, config) {
      on('task',{

        excelToJsonConvertor(filePath)
        {
            const result = excelToJson({
            source: fs.readFileSync(filePath)
        })
        return result
        }
    })
    },
  

  },
});



//messages -> json file ->html