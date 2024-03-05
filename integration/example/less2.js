describe('Check If plus button works', function() {
    it('Navigate with the URL to open Webside', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').find('.product').eq(2).contains('+').click();
    });
});