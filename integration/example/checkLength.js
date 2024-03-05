describe('Cech legth', () => {
    it('should have 2 lenth', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('label').contains('Option2').find('input[type="checkbox"]').check();
        cy.get('label').contains('Option3').find('input[type="checkbox"]').check();
        cy.get('input[type="checkbox"]:checked').should('be.checked').should('have.length', 2);
        cy.get('input[type="checkbox"]:not(:checked)').should('not.be.checked').should('have.length', 1);
    });
});