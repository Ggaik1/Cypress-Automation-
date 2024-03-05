// describe('Validate all fields and subbmit', () => {
//     let userData
//     before(() => {
//         cy.fixture('testdata').then((myData) => {
//             userData = myData
//         });
//     });
//     it.only('Validation and Submit', () => {
//         cy.visit('https://demoqa.com/automation-practice-form');
//         cy.get('#firstName').type(userData.name);
//         cy.get('#lastName').type(userData.lastName);
//         cy.get('#userEmail').type(userData.email)
//     });
// });



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return true;
  })

describe('Form pactice', () => {
    before(() => {
        // cy.visit('https://demoqa.com/automation-practice-form');
    });

    it('fill in form and submit', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
       cy.get('#userNumber').type('Yes')
    });
});