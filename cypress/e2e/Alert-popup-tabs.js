/// <refernce types="cypress"/>
/// <refernce types='cypress-iframe'/>

import 'cypress-iframe'

describe('first Suite', () => {
    it('test1', () => {
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

        /*
        //Cypress automatically accepts Alert & pop up confirmation
        // below is how to compare Alert Text 
        cy.get("#alertbtn").click()
        cy.on("window:alert",(str) =>
        {
            expect(str).to.equal("Hello , share this practice page and share your knowledge")
        })

        // Assserting confirmation pop up text 
        cy.get("#confirmbtn").click()
        cy.on("window:confirm",(str) =>
        {
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

      

        //To Remove any attribute from DOM using jquery method invoke by using origin , 
        //cy.get("#opentab"since new tab is new domain which cypress not supporting

        cy.get("#opentab").then(function(el)
        {
           const url = el.prop('href')
        
        cy.get("#opentab").invoke('removeAttr','target').click()
        cy.origin(url,() =>
        {
        cy.url().should("include","qaclickacademy")
        cy.go('back')
        
        })
        })

        //Handling Frame 
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find('a[href="https://courses.rahulshettyacademy.com/courses"]').eq(0).click()
        cy.wait(4000)
        cy.iframe().find('.course-box-image').should('have.length',36)

        */

    })
 }) 