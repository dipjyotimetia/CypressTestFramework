/// <reference types="Cypress" />

import { click, enter } from "../support/actions";

const loginWindow = 'a[href="#login"]';
const userName = 'input[placeholder="Email"]';
const password = 'input[placeholder="Password"]';
const loginButton = 'button[type="submit"]';

export const loginPage = {

    navigateToUrl(url) {
        cy.visit(url)
            .viewport('macbook-15');
    },

    login(UserName, Password) {
        click(loginWindow);
        enter(userName, UserName);
        enter(password, Password);
        click(loginButton);
    },
}
