import header from './components/Header.js'

class TestCasesPage{

    constructor(){
        this.header = header
    }
    
    testCasesPageisVisible(){
        cy.get('h2.text-center')
            .should('be.visible')
            .should('have.text', "Test Cases")
    }
}

export default new TestCasesPage()
