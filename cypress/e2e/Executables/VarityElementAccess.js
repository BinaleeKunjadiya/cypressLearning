/// <refernce types="cypress"/>

describe('first Suite', () => {
        it('test1', () => {
            cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")

            // working on checkbox - check , uncheck , multicheck & its assertion
            cy.get("#checkBoxOption1").check().should('be.checked').and('have.value','option1')
            cy.get("#checkBoxOption1").uncheck().should('not.be.checked').and('have.value','option1')
            cy.get('input[type="checkbox"]').check(["option2","option3"])


            //Static Dropdown
            cy.get("select").select("option3").should('have.value','option3')

            //Dynamic Dropdown
            cy.get('#autocomplete').type('ind')
            

            //------------------Assertion----------------- fetching element value text and if Text matches
            cy.get(".ui-menu-item div").each(($el, index, $list) => {   

                    if($el.text()==="India")
                    {
                            cy.wrap($el).click()
                    }
            } )
            cy.get('#autocomplete').should('have.value','India')
            
        })
     }) 