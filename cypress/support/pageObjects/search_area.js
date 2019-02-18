const searchBoxElement = '.form-redux > :nth-child(1) > .tt-input';
const searchAreaElement = '.location-holder > .twitter-typeahead > .tt-input';
const searchResultHolderElement = '.search-results';
const searchResultsElement = '.project-card'

export const searchArea = {
    verifyExist() {
        cy.get(searchAreaElement).should('be.visible');
    },
    canSearch(keyword, location) {
        cy.get(searchBoxElement).type(keyword);
        cy.get(searchAreaElement).type(`${location}{enter}`);
        cy.get(searchResultHolderElement).find(searchResultsElement).should('be.visible');
    }
}