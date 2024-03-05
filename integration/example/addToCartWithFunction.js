describe('Search and add to cart', () => {
    let formData;
    before(() => {
        cy.fixture('findproduct').then((productData) => {
            formData = productData;
        });
    });

    it('Add to cart 3 products', () => {
        cy.visit('https://prium.github.io/falcon/v3.19.0/app/e-commerce/product/product-list.html');
        // console.log(formData.products.length, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        cy.get('.form-control.search-input.fuzzy-search').type('Apple iMac Pro'); // Search the product name
        cy.get('.card-body.p-0.overflow-hidden').should('be.visible'); // Make sure that search results are visible
        
        for(let i = 0; i < formData.products.length; i++) {
            cy.addInCart(formData.products[i]);
        }
    });
});