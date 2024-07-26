import header from './components/Header.js'


class HomePage {

    constructor(){
        this.header = header
    }
    
    visitHomePage(width, height){
        cy.visit('http://automationexercise.com').viewport(width, height)
        cy.get('.carousel-inner h1').eq(0)
            .should('be.visible')    
            .should('have.text', 'AutomationExercise')
    }

    homePageIsVisible(){
        cy.get('.carousel-inner h1').eq(0)
        .should('be.visible')    
        .should('have.text', 'AutomationExercise')
    }
    
}
export default new HomePage()