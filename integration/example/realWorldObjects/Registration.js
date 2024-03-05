class Registration {
    getUserNameField() {
        return cy.get('#username');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getRememberMeCheckbox() {
        return cy.get('form input[type="checkbox"]');
    }

    getCheckBoxView() {
        return cy.get('.MuiFormControlLabel-root');
    }

    getSignInButton() {
        return cy.get('[data-test="signin-submit"]');
    }

    getSignUpButton() {
        return cy.get('.MuiButton-label');
    }

    getSignUpLinkButton() {
        return cy.get('.MuiGrid-root.MuiGrid-item').eq(1);
    }

    getSignInLinkButton() {
        return cy.get('.MuiGrid-root.MuiGrid-item');
    }

    getLogOutButton() {
        return cy.get('.MuiListItemText-root')
    }

    getNameFieldErrorMessage() {
        return cy.get('#username-helper-text');
    }

    getPasswordErrorMessage() {
        return cy.get('#password-helper-text');
    }

    getFirstNameErrorMessage() {
        return cy.get('#firstName-helper-text');
    }

    getConfirmPasswordErrorMessage() {
        return cy.get('#confirmPassword-helper-text');
    }

    getFirstNameField() {
        return cy.get('#firstName');
    }

    getLastNameField() {
        return cy.get('#lastName');
    }

    getConfirmPasswordField() {
        return cy.get('#confirmPassword');
    }

    getBankNameField() {
        return cy.get('#bankaccount-bankName-input');
    }

    getRoutingNumberField() {
        return cy.get('#bankaccount-routingNumber-input');
    }

    getAccountNumberField() {
        return cy.get('#bankaccount-accountNumber-input');
    }

    
}

export default Registration;