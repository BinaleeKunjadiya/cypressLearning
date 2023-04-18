/// <reference types="cypress" />
import neatCSV from 'neat-csv';
//const neatCSV = require('neat-csv')



let productName

describe('JWT Session', () => {

  it('is logged in through local storage', async() => {


        cy.LoginAPIandGetToken().then(function()
        {
            cy.visit("https://rahulshettyacademy.com/client",
            {
                onBeforeLoad :function(window)
                {
                    window.localStorage.setItem("token",Cypress.env('token'))
                }
            })
        })

        cy.get(".card-body b").eq(1).then(function(ele)

        {

        productName =  ele.text();

        })
        

        cy.get(".card-body button:last-of-type").eq(1).click();

        cy.get("[routerlink*='cart']").click();
        cy.wait(4000)

        cy.contains("Checkout").click();

        cy.get("[placeholder*='Country']").type("ind")

        cy.get('.ta-results button').each(($e1, index, $list) => {


            if($e1.text()===" India")

            {

                cy.wrap($e1).click()

            }

        })

        cy.get(".action__submit").click();

        cy.wait(2000)

        cy.get(".order-summary button").eq(0).click();

   

  //cy.readFile("C:/Users/Binalee/Downloads/order-invoice_binaleekunjadiya.csv")
  cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_binaleekunjadiya.csv")

  .then(async(text)=>

  {

    const csv =  await neatCSV(text)

    console.log(csv)

    const actualProductCSV = csv[0]["Product Name"]

    expect(productName).to.equal(actualProductCSV) 

  })

  // This is just for checking whether file content includes this string or not without finding its exect position, to find position,
//you need to use above commands
  cy.readFile("C:/Users/Binalee/Downloads/order-invoice_binaleekunjadiya.csv").then(function(text)
  {
    expect(text).to.include(productName)
  })
  

  })
})




