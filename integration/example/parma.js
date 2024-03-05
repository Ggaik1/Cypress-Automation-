
// Task: Go Parma web search sproduct, click on mignificant glass icon and go through all products to find special product

describe('Go to Parma web site and find yogurt Products', function() {
    it('Search and Find yogurt', function() {
        cy.visit('https://parma.am/en/');
        cy.get("#search-box").type("yogurt");
        cy.wait(2000);
        cy.get('.search_btn > .fa').click();

        cy.get('.menu_sections_item').each(($el) => {
            const productName = $el.find('.Yogurt').text();
            if (productName.includes('Yogurt')) {
                $el.find('.menu_sections_item').click();
            }
        });
    });
});