/// <reference types="Cypress" />

import { click, enter } from "../support/actions";

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
            // .fixture('account/accountdetails').as('accountdetails')
            .fixture('account/inventory').as('inventory')
            .route('POST', '/api/account/detail').as('details')
            .route('GET', '/experience/account/promotions/clientinventory', '@inventory').as('clientinventory');
        click(loginWindow);
        enter(userName, UserName);
        enter(password, Password);
        click(loginButton);
        cy.wait('@details')
            .wait('@clientinventory');
    }
}
