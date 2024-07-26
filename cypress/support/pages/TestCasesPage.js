import {header} from "./components/header"

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
