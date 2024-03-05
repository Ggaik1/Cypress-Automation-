import Registration from "./realWorldObjects/Registration";

describe('Registration Functionality: SignIN/SignUP', () => {
    const registration = new Registration();
    let formData; 

    beforeEach(() => {
        cy.visit('http://localhost:3000/');  
    });

    before(() => {
       
        cy.fixture('realworldappdata').then((testdata) => {
            formData = testdata;
        });
    });

    it('Make sure that all "Sign In" artibutes are shown and works as expected', () => {

        registration.getUserNameField().should('be.visible');
        registration.getPasswordField().should('be.visible');
        registration.getCheckBoxView().should('be.visible');
        registration.getSignInButton().should('be.visible');
        registration.getSignUpLinkButton().should('be.visible');  // 1

        registration.getSignInButton().click();
        registration.getNameFieldErrorMessage().contains('Username is required').should('be.visible');
        registration.getSignInButton().should('be.disabled'); // 2

        registration.getUserNameField().type('Automation Tester');
        registration.getNameFieldErrorMessage().should('not.exist'); // 3 

        // registration.getPasswordField().type('E');
        // registration.getPasswordErrorMessage().contains('Password must contain at least 4 characters').should('be.visible');
        // registration.getPasswordField().type('X');
        // registration.getPasswordErrorMessage().contains('Password must contain at least 4 characters').should('be.visible');
        // registration.getPasswordField().type('P');
        // registration.getPasswordErrorMessage().contains('Password must contain at least 4 characters').should('be.visible');
        // 4
        // const characters = ['E', 'X', 'P'];

        // characters.forEach(character => {
        // registration.getPasswordField().type(character);
        cy.passwordCharacters() // the  function above is coverd in the commands.js file with cy.PasswordCharacters()
        registration.getPasswordErrorMessage().contains('Password must contain at least 4 characters').should('be.visible');

    });

    it('Make sure that all "Sign Up" artibutes are shown and works as expected', () => {

        registration.getSignUpLinkButton().click();

        registration.getFirstNameField().should('be.visible');
        registration.getLastNameField().should('be.visible');
        registration.getUserNameField().should('be.visible');
        registration.getPasswordField().should('be.visible');
        registration.getConfirmPasswordField().should('be.visible');
        registration.getSignUpButton().should('be.visible');
        registration.getSignInLinkButton().should('be.visible');   //5 

        registration.getSignUpButton().click();
        registration.getFirstNameErrorMessage().contains('First Name is required').should('be.visible') // 6

        cy.passwordCharacters() // this function is coverd in the commands.js file with cy.PasswordCharacters()
        registration.getPasswordErrorMessage().contains('Password must contain at least 4 characters').should('be.visible');

        // 7

        registration.getPasswordField().clear();
        registration.getPasswordField().type(formData.password);
        registration.getConfirmPasswordField().type(formData.password2);

        registration.getConfirmPasswordErrorMessage().contains('Password does not match').should('be.visible') //8

        registration.getFirstNameField().type(formData.firstName);
        registration.getLastNameField().type(formData.lastName);
        registration.getUserNameField().type(formData.username);
        registration.getPasswordField().clear().type(formData.password);
        registration.getConfirmPasswordField().clear().type(formData.password);

        
        registration.getFirstNameErrorMessage().should('not.exist')
        registration.getConfirmPasswordErrorMessage().should('not.exist')  // 9

        registration.getSignUpButton().click()

        cy.get('.makeStyles-root-1').should('be.visible');
        registration.getUserNameField().should('be.visible');
        registration.getPasswordField().should('be.visible');
        registration.getCheckBoxView().should('be.visible');
        registration.getSignInButton().should('be.visible');
        registration.getSignUpLinkButton().should('be.visible'); //10

    });

    it('Log in and Log out with and without the checkbox', () => {
        
        
      
        // registration.getUserNameField().type(formData.username);
        // registration.getPasswordField().type(formData.password);
        // registration.getSignUpButton().click(); 

        cy.logIn() // the commented function above is in the commands.js file and covered with cy.LogIn() here
        
         //11

        // if(cy.get('.MuiButton-label').contains('Next').click()) {

        cy.get('.MuiDialogTitle-root').should('be.visible');
        //     registration.getBankNameField().type(formData.bankName);
        //     registration.getRoutingNumberField().type(formData.routingNumber);
        //     registration.getAccountNumberField().type(formData.accountNumber);
        //     cy.get('.MuiButton-label').contains('Save').click();
        //     cy.get('.MuiButton-label').contains('Done').click();
        // }
        

        cy.get('.MuiButton-label').contains('Next').click();
        registration.getBankNameField().type(formData.bankName);
        registration.getRoutingNumberField().type(formData.routingNumber);
        registration.getAccountNumberField().type(formData.accountNumber);
        cy.get('.MuiButton-label').contains('Save').click();
        cy.get('.MuiButton-label').contains('Done').click();

        cy.get('.MuiDialogTitle-root').should('not.exist'); //12

        registration.getLogOutButton().contains('Logout').click();

        cy.get('.MuiContainer-root.MuiContainer-maxWidthXs').should('be.visible'); 
        registration.getUserNameField().should('not.have.value');
        registration.getPasswordField().should('not.have.value'); //13
        
        // registration.getPasswordField().type(formData.password);
        // registration.getUserNameField().type(formData.username);
        if (formData.rememberMeCheckBox) {
            registration.getRememberMeCheckbox().check();
        }
        // cy.get('form input[type="checkbox"]').check();

        cy.logIn() // the commented function above is in the commands.js file and covered with cy.LogIn() here
        
        registration.getSignUpButton().click(); 
        registration.getLogOutButton().contains('Logout').click();


        registration.getUserNameField().should('not.have.value');
        registration.getPasswordField().should('not.have.value');

    });
});