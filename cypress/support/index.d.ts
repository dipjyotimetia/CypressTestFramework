/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to clear mocks
         * @example cy.clearMock()
         */
        clearMock(): Chainable<any>;

    }
}
