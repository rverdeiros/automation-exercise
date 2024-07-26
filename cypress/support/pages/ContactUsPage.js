import {header} from "./components/header"

class ContactUsPage {

    constructor(){
        this.header = header
    }
    
    getInTouchFormIsVisible() {
        cy.get('div.contact-form')
            .should('be.visible')
    }

    fillContactForm(user){
        cy.get('input[data-qa="name"]').type(user.first_name + " "+user.last_name)
        cy.get('input[data-qa="email"]').type(user.email)
        cy.get('input[data-qa="subject"]').type("SubjectTest")
        cy.get('textarea[data-qa="message"]').type("Test Message")
    }

    uploadFile(path){
        cy.get('input[type=file]').selectFile(path)
    }

    SubmitContactUsFormData(){
        cy.get('input[data-qa="submit-button"]').click()
    }

    alertBrowserConfirmation(boolean){
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Press OK to proceed!');
            return boolean;
        })
    }

    messageContactFormSubmitted(){
        cy.get('div.contact-form div.alert-success')
            .should('be.visible')
            .should('have.text', 'Success! Your details have been submitted successfully.')
    }

    homeButtonClick(){
        cy.get('a[href="/"] span')
            .should('have.text', " Home")
            .click()
    }
}
export default new ContactUsPage()