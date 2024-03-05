// describe('Find expected product with name', () => {
//     it('Find with name', () => {
//         cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
//         cy.get('.col-lg-9').find('.col-lg-3.col-md-6.mb-3').each(($el) => {

//             const phoneType = $el.find('.card-title').text()
//         });
//     });
// });


describe('Find expected product with name', () => {
    let products
    before(() => {
        cy.fixture('productdata').then((data) => {
            products = data;
        });
    });
    it('Find with name', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
        // cy.get('.card').each(($el, $index, $list) => {
        //     cy.get('.card-title').eq($index).then(($item) => {
        //         if ($item.text().includes(products.data)) {
        //             cy.get('.btn-info').eq($index).click();
        //             return false;
        //         }
        //     });
        // });
        cy.addToCard(products.names); //this function above added in commands.js file and imported here with this one row
    });
});

