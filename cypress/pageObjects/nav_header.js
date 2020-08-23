const headerElement = '#main-header';

export const navHeader = {
    verifyHeader() {
        cy.get(headerElement).should('be.visible');
    }
}