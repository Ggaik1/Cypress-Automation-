// https://docs.cypress.io/api/commands/title nayel querinery ev orinaknerov grel as-ic minchev window



describe('Get familiar with Cypress queries', () => {
    it('Write examples for each function', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        cy.get('form input[name="name"]').as('nameField').type('Gagik'); 
        cy.get('@nameField').should('have.value', 'Gagik'); // 1 - AS() funciton

        cy.get('.form-group').children('input[name="email"]').as('emailField').type('cypresgmail.com'); 
        cy.get('@emailField').should('have.value', 'cypresgmail.com'); // 2 - Children() function (children always returns array)

        // closest 

        cy.get('.form-group').contains('Password').type('Password12345!') // 4 - Contains() function

        // document 

        cy.get('.form-group').eq(0).clear() // 6 - Eq() function

        cy.get('.container').filter('.form-group').clear(); // 7 - filter() function

        cy.get('.container').find('.jumbotron').should('be.visible'); // 8 - Find() function

        cy.get('.form-group').first().type('Gagik Asatrayan').focused(); // 9/10 - First() and Focused functions

        cy.get('.form-group').last().type('2003-12-12');  // 15 - last() funciton

        

        // get 

        //hash 






    });
});