/// <reference types="Cypress" />
const loginWindow = 'button[data-testid="topbarDropDown"]';
const userName = 'input[data-testid="emailLoginDropDownContent"]';
const password = 'input[data-testid="passwordLoginDropDownContent"]';
const loginButton = 'button[data-testid="submitLoginDropDownContent"]';

export const loginPage = {

    navigateToUrl(url) {
        cy.visit(url)
            .viewport('macbook-15');
    },

    login(UserName, Password) {
        cy.server()
            .fixture('account/accountdetails').as('accountdetails')
            .fixture('account/inventory').as('inventory')
            .route('GET', '/api/account/detail', '@accountdetails').as('details')
            .route('GET', '/experience/account/promotions/clientinventory', '@inventory').as('clientinventory')
            .get(loginWindow).click()
            .get(userName).type(UserName)
            .get(password).type(Password)
            .get(loginButton).click()
            .wait('@details')
            .wait('@clientinventory');
    }
}
