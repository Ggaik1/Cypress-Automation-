// describe('Form Validation', () =>  {
//     before(() => {

//     });

//     after(() => {

//     });

//     beforeEach(() => {

//     });

//     afterEach(() => {

//     });

// });

describe('Form Validation', () =>  {
    let formData
    before(() => {
        cy.fixture('testdata').then((Mydata) => {
            formData = Mydata;
        });
    });

    it('Filling in Form', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('form input[name="name"]').type('T');
        cy.get('form input[name="email"]').type(formData.email);
        cy.get('.alert.alert-danger').should('be.visible');
        cy.get('form input[name="name"]').type('T').clear().type(formData.name);
        cy.get('.alert.alert-danger').should('not.exist');
        cy.get('#exampleInputPassword1').type(formData.password);
        cy.get('#exampleFormControlSelect1').select(formData.gander);
        cy.get('form input[name="bday"]').type(formData.birthday);
        cy.get('form input[name="inlineRadioOptions"]').check(formData.radioButtons);

        if (formData.checkbox) {
            cy.get('input[type="checkbox"]').check();
        }
        
        cy.get('h4 input[name="name"]').should('have.value', formData.name);
        cy.get('form input[name="name"').should('have.attr', 'minlength', 2);
        cy.get('#inlineRadio3').should('be.disabled');

        cy.get('.btn.btn-success').click();
        cy.get('.alert.alert-success').should('be.visible');
    });
});



// describe('Form Validation', () => {
//     let formData;
//     before(() => {
//         cy.fixture('testdata').then((Mydata) => {
//             formData = Mydata;
//         });
//     });

//     it('Filling in Form', () => {
//         cy.visit('https://rahulshettyacademy.com/angularpractice/');
//         cy.get('form input[name="name"]').type(formData.name);
//         cy.get('form input[name="email"]').type(formData.email);
//         cy.get('#exampleInputPassword1').type(formData.password);
//         cy.get('input[type="checkbox"]').check();
//         cy.get('#exampleFormControlSelect1').select(formData.gander);

//         // Convert the date format from DD.MM.YYYY to YYYY-MM-DD
//         const [day, month, year] = formData.birthday.split('.');
//         const formattedBirthday = `${year}-${month}-${day}`;

//         // Type the formatted birthday into the input field
//         cy.get('form input[name="bday"]').type(formattedBirthday);

//         // Assertions
//         cy.get('h4 input[name="name"]').should('have.value', formData.name);
//         cy.get('form input[name="name"]').should('have.attr', 'minlength', 2);
//         cy.get('#inlineRadio3').should('be.disabled');
//     });
// });