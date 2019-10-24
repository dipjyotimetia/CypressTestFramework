/// <reference types="Cypress" />

import { loginPage } from "../support/pageObjects/login_page";

describe('Testing BetEasy Web', function () {

    it('BetEasy Login', () => {
        loginPage.navigateToUrl('https://beteasy.com.au');
        loginPage.login('', '');
    });

});
