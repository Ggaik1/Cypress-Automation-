


describe('Testing select box', () => {
    it('Working with select box', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('select').select('option2')
        cy.get('select').should('have.value', 'option2');
        cy.get('option:selected').should('have.text', 'Option2');
        
    });
});