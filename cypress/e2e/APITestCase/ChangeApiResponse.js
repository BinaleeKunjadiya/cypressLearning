/// <reference types="Cypress" />
 
describe('My First Test Suite', function() 
{
 
it('Mocking API Response',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
    cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
 
     {
         statusCode : 200,
         
         body : [{
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"    }]
                
          
     }).as('bookretrievals')
     
     cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    }).as('checkTableRow')

     cy.get("button[class='btn btn-primary']").click()
     cy.wait(5000)
     
     cy.wait('@checkTableRow').then(({request,response})=>
     {
         cy.get('tr').should('have.length',response.body.length+1)
      
     })
     
     //cy.get('p').should('have.text','Oops only 1 Book available')
 
 
 
     //length of the response array = rows of the table 
 
})

it('Asserting original API Response',function() {
 
    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
 
     
     cy.intercept({
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    }).as('checkTableRow')

     cy.get("button[class='btn btn-primary']").click()
     cy.wait(5000)
     
     cy.wait('@checkTableRow').then(({request,response})=>
     {
         cy.get('tr').should('have.length',response.body.length+1)
      
     })
     
     
     //length of the response array = rows of the table 
 
})
 
})
 
 
 