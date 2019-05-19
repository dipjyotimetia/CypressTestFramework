/// <reference types="Cypress" />

describe.skip('Testing the hero list page', function () {

    it('Beteasy', () => {
        cy.visit('https://beteasy.com.au/')
            .screenshot()
            .type('','')
            .wait(1000)
            .writeFile('')
            .trigger('mouseover')
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