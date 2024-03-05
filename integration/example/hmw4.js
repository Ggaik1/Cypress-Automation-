//HOMEWORK
//go to any supermarket (yerevan city, sas, parma) search e.g. Կաթ  go through all products and find "Dragee "Grand Candy" Joyco, Cow 150g"

describe('Go to Yerevan City and Find Milk Products', function() {
    it.only('Search and Find Dragee', function() {
        cy.visit('https://yerevan-city.am/');
        cy.get('.P-bottom-block > :nth-child(2)').click();
        cy.get('.G-btn').click();
        cy.get('.G-relative > .ng-untouched').type('Կաթ');
        cy.wait(2000);

        cy.get('.P-product-item').each(($el, $index, $list) => {
            const productName = $el.find('.G-mt-1.P-text').text();
            cy.log(productName, "Erkar-----------ankap-------------------string");
            if (productName.includes('Դրաժե «Գրանդ Քենդի» Ջոյկո, Կովիկ 150գր')) {
                $el.find('.P-product-btn').click();
            }
        });
    });
});










// 