import Navigations from "./realWorldObjects/Navigatons";

describe('Navigation Functionality: Menu Bar', () => {
    const navigations = new Navigations();
    let formData; 

    beforeEach(() => {
        cy.visit('http://localhost:3000/');  
    });

    before(() => {
        cy.fixture('realworldappdata').then((testdata) => {
            formData = testdata;
        });
    });

    it('Make sure that all button in Menu Bar exists and redirects to the expected pages', () => {

        cy.logIn();
        navigations.getMenBarButton().should('be.visible');
        navigations.getUserName().contains(formData.username).should('be.visible');
      //  cy.get('.MuiGrid-root.MuiGrid-item').should('be.visible'); //whole menu bar visibility 
    });
});