describe('Yerevan City Dark/light mode Wizard', function() {
    it('Make Yerevan City Dark', function() {
        cy.visit('https://yerevan-city.am/');
        cy.get('.P-bottom-block > :nth-child(2)').click().get('.G-btn').click();
    });
    it()
});


