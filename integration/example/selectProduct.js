describe('Find expected product with name', () => {
    it('Find with name', () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop');
        cy.get('.col-lg-9').find('.col-lg-3.col-md-6.mb-3').each(($el) => {

            const phoneType = $el.find('.card-title').text()
        });
    });
});