/// <reference types="Cypress" />
const loginWindow = 'button[data-testid="topbarDropDown"]';
const userName = 'input[data-testid="emailLoginDropDownContent"]';
const password = 'input[data-testid="passwordLoginDropDownContent"]';
const loginButton = 'button[data-testid="submitLoginDropDownContent"]';

export const loginPage = {

    navigateToUrl(url) {
        cy.visit(url);
    },

    login(UserName, Password) {
        cy.get(loginWindow).click()
            .get(userName).type(UserName)
            .get(password).type(Password)
            .get(loginButton).click();
    }
}