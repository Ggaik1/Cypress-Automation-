describe('Check unchecking process', () => {
    it('Go through all checkboxes and uncheck checked', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value', 'option3');
        cy.get('input[type="checkbox"]').each(($el) => {
            if ($el.prop('checked')) {
                cy.wrap($el).uncheck()
            
            }
        
        });
        cy.get('input[type="checkbox"]').should('not.be.checked');
    });
})