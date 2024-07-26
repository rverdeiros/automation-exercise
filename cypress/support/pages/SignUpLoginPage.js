import header from "./components/header"

class SignUpLoginPage {
    constructor() {
        this.header = header
    }

    visitSignUpLoginPage(width, height) {
        cy.visit('https://automationexercise.com/login').viewport(width, height)
    }

    signUpLoginPageIsVisible() {
        cy.get('.signup-form > h2')
            .should('be.visible')
            .should('have.text', 'New User Signup!')
    }

    loginToYourAccountIsVisible() {
        cy.get('.login-form > h2')
            .should('be.visible')
            .should('have.text', 'Login to your account')
    }

    fillLoginData(user) {
        cy.get('input[data-qa="login-email"]')
            .type(user.email)
        cy.get('input[data-qa="login-password"]')
            .type(user.password)
    }

    fillSignUpData(user) {
        cy.get('input[data-qa="signup-name"]')
            .type(user.first_name)
        cy.get('input[data-qa="signup-email"]')
            .type(user.email)
    }

    submitNewUserSignUpData() {
        cy.get('button[data-qa="signup-button"]')
            .click()
    }

    submitLoginData() {
        cy.get('button[data-qa="login-button"]')
            .click()
    }

    fillUserAccountInformation(user) {
        cy.get('.title.text-center > b').eq(0)
            .should('be.visible')
            .should('have.text', 'Enter Account Information')
        cy.get('input[id="id_gender1"]')
            .check()
        cy.get('input[data-qa="name"]')
            .clear()
            .type(user.first_name + ' ' + user.last_name)
        cy.get('input[data-qa="password"]')
            .clear()
            .type(user.password)
        cy.get('select[data-qa="days"]')
            .select(user.birth_date.day)
        cy.get('select[data-qa="months"]')
            .select(user.birth_date.month)
        cy.get('select[data-qa="years"]')
            .select(user.birth_date.year)
        cy.get('input[name="newsletter"]')
            .check()
        cy.get('input[name="optin"]')
            .check()
    }

    fillUserAddressInformation(user) {
        cy.get('input[data-qa="first_name"]')
            .type(user.first_name)
        cy.get('input[data-qa="last_name"]')
            .type(user.last_name)
        cy.get('input[data-qa="company"]')
            .type(user.company)
        cy.get('input[data-qa="address"]')
            .type(user.address)
        cy.get('input[data-qa="address2"]')
            .type(user.address2)
        cy.get('select[data-qa="country"]')
            .select(user.country)
        cy.get('input[data-qa="state"]')
            .type(user.state)
        cy.get('input[data-qa="city"]')
            .type(user.city)
        cy.get('input[data-qa="zipcode"]')
            .type(user.zip_code)
        cy.get('input[data-qa="mobile_number"]')
            .type(user.mobile_number)
    }

    submitUserDataAndCreateAccount() {
        cy.get('button[data-qa="create-account"]')
            .click()
        cy.get('h2[data-qa="account-created"]')
            .should('have.text', 'Account Created!')
        cy.get('a[data-qa="continue-button"]')
            .click()
    }

    alertIncorrectLoginData(){
        cy.get('form[action="/login"] p' )
            .should('be.visible')
            .should('have.text', 'Your email or password is incorrect!')
    }

    alertUserAlreadyRegistered(){
        cy.get('form[action="/signup"] p')
            .should('be.visible')
            .should('have.text', 'Email Address already exist!')
    }

    deleteUserAccount(user) {
        cy.get('.fa-user').parent('a')
            .should('have.text', ' Logged in as ' + user.first_name + ' ' + user.last_name)
        cy.get('a[href="/delete_account"]')
            .click()
        cy.get('h2[data-qa="account-deleted"]')
            .should('have.text', 'Account Deleted!')
            .should('be.visible')
        cy.get('a[data-qa="continue-button"]')
            .click()
    }


}
export default new SignUpLoginPage()