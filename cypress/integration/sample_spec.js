/// <reference types="Cypress" />

describe('Testing the hero list page', function () {

    it('should contain the word heroes', function () {
        cy.visit('http://localhost:4200');
        cy.contains("Heroes");
        cy.screenshot();
    })

});