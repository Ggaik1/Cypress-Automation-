describe('fIll all fileds', () => { // Describe is Test suit 
    it('Fill all fields and make sure that application is subbmited', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('form input[name="name"]').as('name').type('Muana').should('have.value', 'Muana');
        cy.get('@name').clear().type('Muana Jan').should('have.value', 'Muana Jan');
        cy.get('form input[name="email"]').type('Muana.fake@gmail.comm').should('have.value', 'Muana.fake@gmail.comm');
        cy.get('#exampleInputPassword1').type('Muana12345!').should('have.value', 'Muana12345!');
        cy.get('#exampleCheck1').check().should('be.checked');
        cy.get('.form-check-label').contains('Check me out if you Love IceCreams!');
        cy.get('#exampleFormControlSelect1').select('Female').should('have.value', 'Female');
        cy.get('#inlineRadio2').check().should('be.checked');
        cy.get('form input[type="date"]').type('2003-12-12').should('have.value', '2003-12-12');
        cy.get('.btn.btn-success').click()
        cy.get('.alert.alert-success.alert-dismissible').should('exist'); // ('be.visible')
    })
})

//class - .
//ID - #
//checkBox - check
//RadioButtons - check
//DropDown - select