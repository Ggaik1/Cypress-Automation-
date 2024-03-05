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

Cypress.Commands.add('addToCard', (productName) => {
    cy.get('.card').each(($el, $index, $list) => {
        cy.get('.card-title').eq($index).then(($item) => {
            if ($item.text().includes(productName)) {
                cy.get('.btn-info').eq($index).click();
                return false;
            }
        });
    });
});


Cypress.Commands.add('addInCart', (productName) => {
    cy.get('.card:visible').each(($el, $index, $list) => {
        // console.log(productName, 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB', $index);
        cy.get('h5.mt-3.mt-sm-0').eq($index).then(($item) => {
            if ($item.text().includes(productName)) {
                cy.get('.btn.btn-sm.btn-primary.d-lg-block.mt-lg-2').eq($index).click();
                 return false;
            }
        });
    });
});


import Registration from "../integration/example/realWorldObjects/Registration";

Cypress.Commands.add('logIn', () => {
    let formData;
    cy.fixture('realworldappdata').then((testdata) => {
        formData = testdata;
        const registration = new Registration(); 

        registration.getUserNameField().type(formData.username);
        registration.getPasswordField().type(formData.password);
        registration.getSignInButton().click();
    });
}); // fixel 

//import Registration from "../integration/example/realWorldObjects/SignInSignOut";

Cypress.Commands.add('passwordCharacters', () => {
    const characters = ['E', 'X', 'P'];
    const registration = new Registration(); 

        characters.forEach(character => {
        registration.getPasswordField().type(character);
    });  // fixel
});