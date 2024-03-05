import HomePage from "./pageObjects/HomePage";


describe('testing page objects', () => {
    const homePage = new HomePage(); // creating object from class
    let formData
    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');   

    })

    before(() => {
        cy.fixture('testdata').then((mydata) => {
            formData = mydata;
         })
    })
    
    it('using page object methods', () => {
        homePage.getNameField().type(formData.name);
        homePage.getEmailField().type(formData.email);
        homePage.getPasswordField().type(formData.password);
        if (formData.checkbox) {
            homePage.getIceCreamCheckBox().check();
        }

        homePage.getGenderDropDown().select(formData.gander);
        homePage.getStatusRadioButton().check(formData.radioButtons);
        homePage.getDateOfBirthFiled().type(formData.birthday);

        homePage.getNameField().should('have.value', formData.name);
        homePage.getEmailField().should('have.value', formData.email);
        homePage.getPasswordField().should('have.value', formData.password);
        homePage.getIceCreamCheckBox().should('be.checked');
        homePage.getGenderDropDown().should('have.value', formData.gander);
        homePage.getStatusRadioButton().should('be.checked');
        homePage.getDateOfBirthFiled().should('have.value', formData.birthday);
    })
})

// lracnel amboxj ejy page objectnerov ev fixturov 