/// <refernce types="cypress"/>

describe('first Suite', () => {
        it('test1', () => {
            cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            cy.get(".products").as("productLocator")
           //Locators 
            // To Send text
            cy.get('.search-keyword').type("ca")
            cy.wait(2000)
    
            // To get Total Length of visible elements 
           cy.get(".product:visible").should("have.length",4)
    
            //Parent child chaining 
           cy.get("@productLocator").find(".product").should("have.length",4)
    
            //element which contains perticular text
            cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click()
    
            //element which has matching text, click its below button
            cy.get("@productLocator").find(".product").each(($el, index, $list) => {    
                const textcapture = $el.find(".product-name").text()
                    if(textcapture.includes("Cashews"))
                    {
                            cy.wrap($el).contains("ADD TO CART").click()
                    }
            } )
    
        })
     }) 