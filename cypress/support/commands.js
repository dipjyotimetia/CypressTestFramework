import 'cypress-file-upload';
import '@testing-library/cypress/add-commands'
import '@percy/cypress'

Cypress.Commands.add("login", (...states) => {
    cy.request({
        url: `${Cypress.env('BASE_API')}/integration/state`,
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ states: states })
    });
});

/**
 * Clear mock server
 */
Cypress.Commands.add('clearMock', () => {
    cy.server({ enable: false });
})
