/// <refernce types="cypress"/>

import Homepage from "../pageObject/Homepage"
import ProductPage from "../pageObject/ProductPage"

describe('first Suite', () => {

    //executes before all specs, so keep all setup things here
    beforeEach(function() 
    {
        //to get json data for data driven specs from example.json file
        cy.fixture('example').then(function(data)
        {
            this.data = data           
        })
        
    })
    /*

        it('test1', function() {
            const homePage = new Homepage()

            cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
            cy.get("input[name='name']:nth-child(2)").type(this.data.name)
            homePage.getGender().select(this.data.gender)
            cy.get('input[value="Submit"]').click()            
        })

        //Assertion Examples with Page object Model
        it('Assertions', function() {
            const homePage = new Homepage()

            cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
            homePage.getEditBox().type(this.data.name)

            //----------------- Assertion ---------Two Way Data Binding example
            homePage.getDataBindingBox().should("have.value",this.data.name)

            //---------------Assertion--------------- Attribute value checking for some element
            homePage.getEditBox().should('have.attr','minlength','2')

            //-----------------Assertion-------------- Radiobutton is disabled or not
            homePage.getdisableRadioButton().should('be.disabled')
                     
        })

*/
        
        // Use of forEach Iterator and custom commands calling 
        //Entire Test Scenario
        it('customCommandCalling',function()
        {
            const productPage = new ProductPage()

            //using environment variable setting in configuration
        
            cy.visit('https://rahulshettyacademy.com/angularpractice/')
            cy.get('.nav-link').contains('Shop').click()

            this.data.productName.forEach(function(element)
            {
                cy.selectProduct(element)
            })
            
            productPage.getCheckOutButton().click()

            const sample = '@. 50000'
            var value = sample.split(' ')
           
            var sum = Number(1000) + Number(value[1])
            cy.log(sum)

        })

     }) 