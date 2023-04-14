class Homepage
{

    getEditBox()
    {
      return  cy.get("input[name='name']:nth-child(2)")
    }

    getDataBindingBox()
    {
        return cy.get("input[name='name']:nth-child(1)")
    }
    
    getGender()
    {
        return cy.get('select')
    }

    getdisableRadioButton()
    {
        return cy.get("#inlineRadio3")
    }
}

export default Homepage