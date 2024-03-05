// Cypress homework:
// 1. need to visit: https://themes.getbootstrap.com/preview/?theme_id=19799
// 2. In the Navigation Toggle click: "Forms" -> Wizard
// 3. Scroll down and find application with the following title "With With Validation"
// 4. Fill all fields and and check maximal adequate variants for validations etc... (Write a "shoulds" to check validations)

describe('Fill all fileds and check validations', () => {
    let formData
    before(() => {
        cy.fixture('getbootstrapdata').then((userData) => {
            formData = userData
        })
    }) 
    it('Check Validatioins', () => {
        //cy.visit('https://themes.getbootstrap.com/preview/?theme_id=19799');
        //cy.wait(2000); // Adjust the wait time as needed
        //cy.get('.btn.navbar-toggler-humburger-icon.navbar-vertical-toggle').should('be.visible');
        //cy.get('.col-lg-6.col-xl-12.col-xxl-6.h-100').find('.card-footer.bg-body-tertiary').find('.px-sm-3.px-md-5').find('.navbar-nav.navbar-nav-icons.ms-auto.flex-row.align-items-center').eq(1).click();   
        //cy.get('.card.theme-wizard.mb-5')//.then('.pager.wizard.list-inline.mb-0')
        //cy.get('btn.btn-primary.px-5.px-sm-6').click();
        cy.visit('https://prium.github.io/falcon/v3.19.0/modules/forms/wizard.html');
        // cy.wait(1000);
       // cy.get('.pager.wizard.list-inline.mb-0').then('.next button[type="submit"]').click();
        //cy.get(':nth-child(3) > :nth-child(2) > .card > .card-footer > .px-sm-3 > .pager > .next > .btn').click()
        // cy.get('.pager.wizard.list-inline.mb-0').eq(1).find('.btn').eq(1).click()
        //cy.get('.card.theme-wizard.h-100.mb-5').eq(0).find('.card-footer.bg-body-tertiary').find('.btn').contains('Next').click();
        // cy.get('.btn.btn-primary.px-5.px-sm-6').contains('Next').click();
        cy.get(".card.theme-wizard.h-100.mb-5").find("button[type='submit']").eq(0).click({force: true});


       // ---------------------------- Click Next to get error here ----------------------------

    //    cy.get('#bootstrap-wizard-validation-wizard-email').then('.invalid-feedback').contains('You must add email').should('be.visible').should('have.text');
    //    cy.get('#bootstrap-wizard-validation-wizard-password').then('invalid-feedback').contains('Please enter password').should('be.visible').should('have.text');
    //    cy.get('#bootstrap-wizard-validation-wizard-confirm-password').then('.invalid-feedback').contains('Passwords need to match').should('be.visible').should('have.text');

        cy.get('#bootstrap-wizard-validation-wizard-name').type(formData.name);
        cy.get('#bootstrap-wizard-validation-wizard-email').type(formData.email);
        cy.get('#bootstrap-wizard-validation-wizard-password').type(formData.password);
        cy.get('#bootstrap-wizard-validation-wizard-confirm-password').type(formData.password);

        cy.get(".card.theme-wizard.h-100.mb-5").find("button[type='submit']").eq(0).click({force: true});

    //     cy.get('#bootstrap-wizard-validation-wizard-confirm-password').then('.invalid-feedback').contains('Passwords need to match').should('be.visible').should('have.text');
    //     cy.get('#bootstrap-wizard-validation-wizard-confirm-password').type(formData.password);

    //     cy.get('#bootstrap-wizard-validation-wizard-checkbox').uncheck().should('not.be.checked');
    //     cy.get('#bootstrap-wizard-validation-wizard-checkbox').check().should('be.checked');


    //     //---------------------------- Click next again for the next page ----------------------------


        cy.get('#bootstrap-wizard-validation-gender').select(formData.gender);
       // cy.log(formData);
        cy.get('#bootstrap-wizard-validation-wizard-phone').type(formData.phone);
        cy.get('#bootstrap-wizard-validation-wizard-datepicker').type(formData.birthday, {force: true});
        // cy.get('.flatpickr-current-month').invoke('hide')
    
        cy.get('#bootstrap-wizard-validation-wizard-address').click({force: true});
        cy.get('#bootstrap-wizard-validation-wizard-address').type(formData.address);

        cy.get(".card.theme-wizard.h-100.mb-5").find("button[type='submit']").eq(0).click({force: true});


    //     //---------------------------- Click next again for the next page ----------------------------


        cy.get('#bootstrap-wizard-validation-card-number').type(formData.cardNumber);
        cy.get('#bootstrap-wizard-validation-card-name').type(formData.nameOnCard);
        cy.get('#bootstrap-wizard-validation-card-holder-country').select(formData.country);
        cy.get('#bootstrap-wizard-validation-card-holder-zip-code').type(formData.zipCode);
        cy.get('#bootstrap-wizard-validation-card-exp-date').type(formData.expDate);
        cy.get('#bootstrap-wizard-validation-card-cvv').type(formData.cvv);

        cy.get(".card.theme-wizard.h-100.mb-5").find("button[type='submit']").eq(0).click({force: true});


    //     //---------------------------- Click next again for the next page ----------------------------


       // cy.get('.mb-1').contains('Your account is all set!').should('be.visible').should('have.text');

        
       
    })
})

