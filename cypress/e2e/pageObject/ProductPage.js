class ProductPage
{

    getCheckOutButton()
    {
       return cy.get("#navbarResponsive").contains('Checkout')
    }
}

export default ProductPage