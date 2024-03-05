//Task: in shoping cart should appear 2 diffarent products, open checkout page and check that there are 2 products exists 

describe('Check Basket functionality', function() {
    // it('Make sure that in the checkout window appeard correct quantity of products',  function() {
    //     cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    //     cy.get('.search-keyword').type('ca');
    //     cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
    //     cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click();
    //     cy.get('.cart-icon').click();
    //     cy.contains('PROCEED TO CHECKOUT').click();
    //     cy.get('.product-name').should('have.length', 2);
    //     // cy.get('.cart-preview').find('.cart-item').should('have.length', 2);
    //    // cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(2)').should('have.length', '1');
    // });

    
    it('Make sure that in shoping card drop-down appeard correct quantity of products', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.products').find('.product').as('productSelector');
        cy.get('@productSelector').eq(2).contains('ADD TO CART').click();
        cy.get('@productSelector').eq(3).contains('ADD TO CART').click();
        cy.get('@productSelector').eq(4).contains('ADD TO CART').click();
        cy.get('.cart-icon').click();
        cy.get('.cart-preview').find('.cart-item').should('have.length', 3);
        

    })
});


