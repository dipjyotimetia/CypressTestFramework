/// <reference types="Cypress" />
const filterShowOnlyElement = '.show-only';
const searchResultHolderElement = '.search-results';
const searchResultsElement = '.project-card';

export const searchPage = {
    canFilterMatchOnly() {
        cy.get(filterShowOnlyElement)
            .wait(2000)
            .find('.filter-name')
            .first()
            .click()
            .wait(2000)
            .get(searchResultHolderElement)
            .find(searchResultsElement)
            .each(function (item, index, list) {
                expect(item).to.have.class('with-match');
            });

    }
}