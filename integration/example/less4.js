describe('Check If plus button works', function() {        
    it('Check that product added in the basket', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);


        cy.get('.products').find('.product').each(($el, $index, $list) => {
            const productName = $el.find('.product-name').text()
            if(productName.includes('Cashew')) {
                $el.find('button').click() 
            }
        })

    });

})