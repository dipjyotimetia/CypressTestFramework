/// <reference types="Cypress" />

import { loginPage } from "../pageObjects/login_page";
import { BASE_URL, USERNAME, PASSWORD } from "../config/config";

describe('Testing BetEasy Web', function () {

    it('BetEasy Login', () => {
        loginPage.navigateToUrl(BASE_URL);
        loginPage.login(USERNAME, PASSWORD);
    });

});
