/// <reference types="Cypress" />
 
describe('API Token Handling ', function() 
{
 
    it('To Skip Login page',function() {
    
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
        
    })
 
})
 