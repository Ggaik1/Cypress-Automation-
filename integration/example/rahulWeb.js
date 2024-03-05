//Task1 
// visit: https://rahulshettyacademy.com/AutomationPractice/ check that logo exists

describe('Rahul website checks', () => {
    
    it('Need to check if logo exists', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('.logoClass').should('exist').should('be.visible');
    });

//Task 2 
// Need to check hide button and make sure that the text is hidden, and show button to make sure that text is shown 

    it('Need to check hide and show button functionalites', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

    });

// Task3 
// Need to check that table have 4 coulumns and one of the coulm contains "Posiiton"

    it('Need to check table length', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    cy.get('table').eq(1).find('th').as('secoundTable')
    cy.get('@secoundTable').should('have.length', 4);
    cy.get('table').eq(1).contains('Position').should('have.text', 'Position');

    });

});