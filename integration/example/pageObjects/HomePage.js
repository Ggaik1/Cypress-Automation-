class HomePage {

    getNameField() {
        return cy.get('form input[name="name"]');
    }

    getEmailField() {
        return cy.get('form input[name="email"]')
    }

    getPasswordField() {
        return cy.get('#exampleInputPassword1')
    }

    getIceCreamCheckBox() {
        return cy.get('input[type="checkbox"]')
    }

    getGenderDropDown() {
        return cy.get('#exampleFormControlSelect1')
    }

    getStatusRadioButton() {
        return cy.get('form input[name="inlineRadioOptions"]')
    }

    getDateOfBirthFiled() {
        return cy.get('form input[name="bday"]')
    }
}

export default HomePage 