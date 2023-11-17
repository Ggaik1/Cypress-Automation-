describe('Enter Youtube and Play some music', function() {
    it('Navigate with the URL to open Youtbue', function() {
        cy.visit('https://www.youtube.com/');   
    });

    it('Play Black Sabbath Paranoid', function() {
        cy.visit('https://www.youtube.com/watch?v=0qanF-91aJo')
        });

    it('Play Black Sabbath War Pigs', function() {
        cy.visit('https://www.youtube.com/watch?v=LQUXuQ6Zd9w')
    });

});



