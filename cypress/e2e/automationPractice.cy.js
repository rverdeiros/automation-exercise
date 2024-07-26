import homePage from '../support/pages/HomePage'
import signUpLoginPage from '../support/pages/SignUpLoginPage'
import users from '../fixtures/users.json'
import contactUsPage from '../support/pages/ContactUsPage'
import testCasesPage from '../support/pages/TestCasesPage'
import productsPage from '../support/pages/ProductsPage'


describe('Automation Practice exercises', () => {
    before('Delete User Data', () => {
        const user = users.register_data
        cy.deleteUserAPI(user)
    })
    it('Register User', () => {
        const user = users.register_data
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        homePage.visitHomePage(1920, 1080)
        // 3. Verify that home page is visible successfully
        homePage.homePageIsVisible()
        // 4. Click on 'Signup / Login' button
        homePage.header.signUpLoginClick()
        // 5. Verify 'New User Signup!' is visible
        signUpLoginPage.signUpLoginPageIsVisible()
        // 6. Enter name and email address
        signUpLoginPage.fillSignUpData(user)
        // 7. Click 'Signup' button
        signUpLoginPage.submitNewUserSignUpData()
        // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
        // 9. Fill details: Title, Name, Email, Password, Date of birth 
        // 10. Select checkbox 'Sign up for our newsletter!'
        // 11. Select checkbox 'Receive special offers from our partners!'
        signUpLoginPage.fillUserAccountInformation(user)
        // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        signUpLoginPage.fillUserAddressInformation(user)
        // 13. Click 'Create Account button'
        // 14. Verify that 'ACCOUNT CREATED!' is visible
        // 15. Click 'Continue' button
        signUpLoginPage.submitUserDataAndCreateAccount(user)
        // 16. Verify that 'Logged in as username' is visible
        // 17. Click 'Delete Account' button
        // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        signUpLoginPage.deleteUserAccount(user)
    })

    it('Login User with correct email and password', () => {
        const user = users.register_data
        //Pré-Requisitos
        cy.registerUser(user)
        signUpLoginPage.header.userLogOut()

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        homePage.visitHomePage(1920, 1080)
        // 3. Verify that home page is visible successfully
        homePage.homePageIsVisible()
        // 4. Click on 'Signup / Login' button
        homePage.header.signUpLoginClick()
        // 5. Verify 'Login to your account' is visible
        signUpLoginPage.loginToYourAccountIsVisible()
        // 6. Enter correct email address and password
        signUpLoginPage.fillLoginData(user)
        // 7. Click 'login' button
        signUpLoginPage.submitLoginData()
        // 8. Verify that 'Logged in as username' is visible
        // 9. Click 'Delete Account' button
        // 10. Verify that 'ACCOUNT DELETED!' is visible
        signUpLoginPage.deleteUserAccount(user)
    })

    it('Login User with incorrect email and password', () => {
        const user = users.incorrect_user
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        homePage.visitHomePage(1920, 1080)
        // 3. Verify that home page is visible successfully
        homePage.homePageIsVisible()
        // 4. Click on 'Signup / Login' button
        homePage.header.signUpLoginClick()
        // 5. Verify 'Login to your account' is visible
        signUpLoginPage.loginToYourAccountIsVisible()
        // 6. Enter incorrect email address and password
        signUpLoginPage.fillLoginData(user)
        // 7. Click 'login' button
        signUpLoginPage.submitLoginData()
        // 8. Verify error 'Your email or password is incorrect!' is visible
        signUpLoginPage.alertIncorrectLoginData()
    })

    it('Logout User', () => {
        const user = users.register_data

        //Pré-requisites
        cy.registerUser(user)
        signUpLoginPage.header.userLogOut()

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        homePage.visitHomePage(1920, 1080)
        // 3. Verify that home page is visible successfully
        homePage.homePageIsVisible()
        // 4. Click on 'Signup / Login' button
        homePage.header.signUpLoginClick()
        // 5. Verify 'Login to your account' is visible
        signUpLoginPage.loginToYourAccountIsVisible()
        // 6. Enter correct email address and password
        signUpLoginPage.fillLoginData(user)
        // 7. Click 'login' button
        signUpLoginPage.submitLoginData()
        // 8. Verify that 'Logged in as username' is visible
        homePage.header.userLoggedIn(user.first_name, user.last_name)
        // 9. Click 'Logout' button
        homePage.header.userLogOut()
        // 10. Verify that user is navigated to login page
        signUpLoginPage.signUpLoginPageIsVisible()

    })

    it('Register User with existing email', () => {
        const user = users.register_data

        //Pre-requisites
        cy.deleteUserAPI(user)
        cy.registerUser(user)
        signUpLoginPage.header.userLogOut()

        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        homePage.visitHomePage(1920, 1080)
        // 3. Verify that home page is visible successfully
        homePage.homePageIsVisible()
        // // 4. Click on 'Signup / Login' button
        homePage.header.signUpLoginClick()
        // // 5. Verify 'New User Signup!' is visible
        signUpLoginPage.signUpLoginPageIsVisible()
        // // 6. Enter name and already registered email address
        signUpLoginPage.fillSignUpData(user)
        // 7. Click 'Signup' button
        signUpLoginPage.submitNewUserSignUpData()
        // 8. Verify error 'Email Address already exist!' is visible
        signUpLoginPage.alertUserAlreadyRegistered()


    })
    it('Contact Us Form', () => {
        const user = users.register_data
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        homePage.visitHomePage(1920, 1080)
        // 3. Verify that home page is visible successfully
        homePage.homePageIsVisible()
        // 4. Click on 'Contact Us' button
        homePage.header.contactUsClick()
        // 5. Verify 'GET IN TOUCH' is visible
        contactUsPage.getInTouchFormIsVisible
        // 6. Enter name, email, subject and message
        contactUsPage.fillContactForm(user)
        // 7. Upload file
        contactUsPage.uploadFile('cypress/support/files/Anexo.jpg')
        // 8. Click 'Submit' button
        contactUsPage.SubmitContactUsFormData()
        // 9. Click OK button
        contactUsPage.alertBrowserConfirmation(true)
        // // 10. Verify success message 'Success! Your details have been submitted successfully.' is visible
        contactUsPage.messageContactFormSubmitted()
        // // 11. Click 'Home' button and verify that landed to home page successfully
        contactUsPage.homeButtonClick()
        homePage.homePageIsVisible()
    })

    it('Verify Test Cases Page', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        homePage.visitHomePage(1920, 1080)
        // 3. Verify that home page is visible successfully
        homePage.homePageIsVisible()
        // 4. Click on 'Test Cases' button
        homePage.header.testCasesClick()
        // 5. Verify user is navigated to test cases page successfully
        testCasesPage.testCasesPageisVisible()
    })

    it('Verify All Products and product detail page', () => {
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        homePage.visitHomePage(1920, 1080)
        // 3. Verify that home page is visible successfully
        homePage.homePageIsVisible()
        // 4. Click on 'Products' button
        homePage.header.productsButtonClick()
        // 5. Verify user is navigated to ALL PRODUCTS page successfully
        productsPage.productsPageIsVisible()
        // 6. The products list is visible
        productsPage.productsListIsVisible()
        // 7. Click on 'View Product' of first product
        // 8. User is landed to product detail page
        productsPage.selectProduct(1)
        // 9. Verify that detail detail is visible: product name, category, price, availability, condition, brand
        productsPage.verifyProductsDetail()
    })

})
