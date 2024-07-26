import {header} from "./components/header"

class ProductsPage {

    constructor() {
        this.header = header
    }

    productsPageIsVisible() {
        cy.get('h2.text-center')
            .should('have.text', "All Products")
    }

    productsListIsVisible() {
        cy.get('div.features_items')
            .should('be.visible')
    }

    selectProduct(index) {
        cy.get(`a[href="/product_details/${index}"]`)
            .click()
        cy.url()
            .should('be.equal', `https://automationexercise.com/product_details/${index}`)
    }

    verifyProductsDetail(){
        cy.get('div.product-information h2')
            .should('have.text', 'Blue Top')
        
        cy.get('div.product-information p').eq(0)
            .should('have.text', 'Category: Women > Tops')
        
        cy.get('div.product-information span span')
            .should('have.text', 'Rs. 500')
        
        cy.get('div.product-information p').eq(1)
            .should('have.text', 'Availability: In Stock')
        
        cy.get('div.product-information p').eq(2)
            .should('have.text', 'Condition: New')
        
        cy.get('div.product-information p').eq(3)
            .should('have.text', 'Brand: Polo')

    }
    
}

export default new ProductsPage()