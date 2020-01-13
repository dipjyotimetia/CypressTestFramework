/**
 * Accept Alert
 * @param {Value} value 
 */
export const acceptAlert = (value) => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(value)
        return true;
    })
}

/**
 * Dismiss Alert
 * @param {Value} value 
 */
export const dismissAlert = (value) => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(value)
        return false;
    })
}