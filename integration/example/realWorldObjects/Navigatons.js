class Navigations {
    
    getMenBarButton() {
        return cy.get('.MuiIconButton-label').eq(0);
    }

    getUserName() {
        return cy.get('.MuiTypography-root.MuiTypography-subtitle2.MuiTypography-colorInherit.MuiTypography-gutterBottom');
    }

}

export default Navigations 