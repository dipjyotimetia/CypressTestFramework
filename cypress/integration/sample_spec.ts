/// <reference types="Cypress" />
/// <reference path="../support/index.d.ts" />

import { loginPage } from "../pageObjects/login_page";
import { BASE_URL, USERNAME, PASSWORD } from "../config/config";

describe('Testing Web', function () {

    before(()=>{
        cy.mockGlobalFeeds();
        cy.mockTags();
    });

    it('Web Login', () => {
        loginPage.navigateToUrl(BASE_URL);
        loginPage.login(USERNAME, PASSWORD);
        cy.wait(9000);
    });

});
