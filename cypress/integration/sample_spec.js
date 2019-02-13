/// <reference types="Cypress" />

describe('Testing the hero list page', function () {

    it('should contain the word heroes', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
        cy.screenshot();
    });

    it('', () => {
        cy.visit('http://automationpractice.com/index.php')
            .get('.login')
            .click()
            .screenshot();
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