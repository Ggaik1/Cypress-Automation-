class Transactions {

    getNewButton() {
        return cy.get('[data-test="nav-top-new-transaction"]');
    }

    getContactList() {
        return cy.get('[data-test="users-list"]');
    }

    getTransactionList() {
        return cy.get('[data-test="transaction-list"]');
    }

    getProgressBar() {
        return cy.get('.MuiPaper-root.MuiStepper-root.MuiStepper-horizontal.MuiPaper-elevation0');
    }

    getSearchBar() {
        return cy.get('[data-test="user-list-search-input"]');
    }

    getRequestContact() {
        return  cy.get('[data-test="user-list-item-t45AiwidW"]');
    }

    getPayContact() {
        return cy.get('[data-test="user-list-item-bDjUb4ir5O"]');
    }

    getContactIcon() {
        return cy.get('.MuiAvatar-root.MuiAvatar-circular');
    }

    getContactName() {
        return cy.get('.MuiGrid-root.MuiGrid-item');
    }

    getAmountFiled() {
        return cy.get('#amount');
    }

    getAddaNoteFiled() {
        return cy.get('#transaction-create-description-input');
    }

    getRequestButton() {
        return cy.get('[data-test="transaction-create-submit-request"]');
    }

    getPayButton() {
        return cy.get('[data-test="transaction-create-submit-payment"]');
    }

    getAmountErrorMessage() {
        return cy.get('#transaction-create-amount-input-helper-text');
    }

    getAddaNoteErrorMessage() {
        return cy.get('#transaction-create-description-input-helper-text');
    }

    getTitle() {
        return cy.get('.MuiTypography-root.MuiTypography-h6.MuiTypography-colorPrimary.MuiTypography-gutterBottom');
    }

    getSubmittedPopUp() {
        return cy.get('.MuiAlert-message')
    }

    getReturnTrnButton() {
        return cy.get('[data-test="new-transaction-return-to-transactions"]')
    }

    getCreateTrnButton() {
        return cy.get('[data-test="new-transaction-create-another-transaction"]')
    }

    get
}

export default Transactions;