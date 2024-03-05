describe('Enter Youtube and Play some music', function() {
    it('Navigate with the URL to open Youtbue', function() {
        // cy.visit('https://www.youtube.com/watch?v=Opxhh9Oh3rg')
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/'); 
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // cy.get('.product:visible').should('have.length', 4);
    //     cy.get('.products .product').should('have.length', 4);
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
});
    // it('Play Black Sabbath Paranoid', function() {
    //     cy.visit('https://www.youtube.com/watch?v=0qanF-91aJo')
    //     });
8
    // it('Play Black Sabbath War Pigs', function() {
    //     cy.visit('https://www.youtube.com/watch?v=LQUXuQ6Zd9w')
    // });

});



