// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import signUpLoginPage from '../support/pages/SignUpLoginPage'

Cypress.Commands.add('registerUser', (user)=> {
    
    signUpLoginPage.visitSignUpLoginPage(1920,1080)
    signUpLoginPage.signUpLoginPageIsVisible()
    signUpLoginPage.fillSignUpData(user)
    signUpLoginPage.submitNewUserSignUpData()
    signUpLoginPage.fillUserAccountInformation(user)
    signUpLoginPage.fillUserAddressInformation(user)
    signUpLoginPage.submitUserDataAndCreateAccount(user)
})

Cypress.Commands.add('deleteUserAPI', (user) =>{
    cy.request({
        method: 'DELETE',
        url: 'https://automationexercise.com/api/deleteAccount',
        form: true,
        body: {
          email: user.email,
          password: user.password
        }
      }).then((response) => {
        cy.log(response.body)
      })
})