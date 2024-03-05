import Transactions from "./realWorldObjects/Transactions";

describe('Transaction Functionality: Pay & Request', () => {

  let formData; 

  before(() => {
     
      cy.visit('http://localhost:3000/'); 
      cy.logIn(); //1
      cy.fixture('realworldappdata').then((testdata) => {
          formData = testdata;
      });
  });

  const transactions = new Transactions
  it('Find contact do request/pay and complete', () => {

    transactions.getNewButton().click(); 

    transactions.getProgressBar().should('be.visible');
    transactions.getContactList().should('be.visible'); 
    transactions.getSearchBar().should('be.visible'); // 2
  
  
  
    transactions.getSearchBar().type(formData.requestContact, {force: true});
    transactions.getRequestContact().contains(formData.requestContact).click()

    transactions.getContactIcon().should('be.visible');
    transactions.getContactName().contains('Edgar Johns').should('be.visible');
    transactions.getAmountFiled().should('be.visible');
    transactions.getAddaNoteFiled().should('be.visible');
    transactions.getRequestButton().should('be.visible');
    transactions.getPayButton().should('be.visible'); //3/4

    transactions.getAddaNoteFiled().click();
    transactions.getAmountErrorMessage().contains('Please enter a valid amount').should('be.visible');
    transactions.getAmountFiled().click()
    transactions.getAddaNoteErrorMessage().contains('Please enter a note').should('be.visible');
    transactions.getRequestButton().should('be.disabled');
    transactions.getPayButton().should('be.disabled'); // 5


    transactions.getAmountFiled().type(formData.amountNumber);
    transactions.getAddaNoteFiled().type(formData.addANote); 
    transactions.getRequestButton().should('not.be.disabled');
    transactions.getPayButton().should('not.be.disabled'); //6


    transactions.getRequestButton().click();
   // transactions.getTitle().contains(formData.requestTitle, formData.amountNumber, formData.forTitle, formData.addANote).should('be.visible');
   // transactions.getTitle().contains(formData.requestTitle, ' $1.00', formData.forTitle, formData.addANote).should('be.visible');
    transactions.getSubmittedPopUp().contains('Transaction Submitted!').should('be.visible');
    transactions.getTitle().contains('Requested $1.00 for Gimme my money ara');
    transactions.getReturnTrnButton().should('be.visible');
    transactions.getCreateTrnButton().should('be.visible'); //7 

    transactions.getCreateTrnButton().click()
    transactions.getContactList().should('be.visible'); //8 

    transactions.getSearchBar().type(formData.payContact);
    transactions.getPayContact().contains(formData.payContact).click();
    transactions.getAmountFiled().type(formData.amountNumber);
    transactions.getAddaNoteFiled().type(formData.addANote1);
    transactions.getPayButton().click();
    transactions.getSubmittedPopUp().contains('Transaction Submitted!').should('be.visible');


    transactions.getTitle().contains('Paid $1.00 for Take my money axji');
    transactions.getReturnTrnButton().should('be.visible');
    transactions.getCreateTrnButton().should('be.visible'); //9

    transactions.getReturnTrnButton().click()
    transactions.getTransactionList().should('be.visible'); //10



    
  });
});