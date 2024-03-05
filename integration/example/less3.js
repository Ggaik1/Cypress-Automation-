describe('Check If plus button works', function() {
//     it('Check that the value become 3 after 2 times click on plus button', function() {
//         cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
//         cy.get('.search-keyword').type('ca');
//         cy.wait(2000);
//         cy.get('.products').find('.product').eq(3).contains('+').click().click()
//         cy.get('.products').find('.product').eq(3).find('.quantity').should('have.value', '3');
//   });

    it('Check that product added in the basket', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click()
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click();
    });
});


