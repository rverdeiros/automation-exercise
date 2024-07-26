class Header {

    homeLogoClick() {
        cy.get('a[href="/"]')
            .click()
    }

    homeButtonClick() {
        cy.get('a[href="/"]')
            .click()
    }

    productsButtonClick() {
        cy.get('a[href="/products"]')
            .click()
    }

    cartButtonClick() {
        cy.get('a[href="/cart"]')
            .click()
    }

    signUpLoginClick() {
        cy.get('a[href="/login"]')
            .click()
    }

    testCasesClick() {
        cy.get('ul.navbar-nav a[href="/test_cases"]')
            .click()
    }

    apiTestingClick() {
        cy.get('a[href="/api_list"]')
            .click()
    }

    videoTutorialsClick() {
        cy.get('a[href="https://www.youtube.com/c/AutomationExercise"]')
            .click()
    }

    contactUsClick() {
        cy.get('a[href="/contact_us"]')
            .click()
    }

    userLogOut() {
        cy.get('a[href="/logout"]')
            .click()
    }

    userLoggedIn(name, lastname) {
        cy.get('i.fa-user')
            .parent()
            .should('be.visible')
            .should('have.text', ' Logged in as '+name+' '+lastname) 
    }

}
export default new Header()