/// <reference types="Cypress" />

import { loginPage } from "../support/pageObjects/login_page";

describe('Testing BetEasy Web', function () {

    it('BetEasy Login', () => {
        loginPage.navigateToUrl('https://beteasy.com.au');
        loginPage.login('', '');
    });

    // Cypress.Commands.add("state", (...states) => {
    //     cy.request({
    //         url: `${Cypress.env('BASE_API')}/integration/state`,
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({ states: states })
    //     });
    // });
});