/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to clear mocks
         * @example cy.clearMock()
         */
        clearMock(): Chainable<any>;

        /**
         * Custom command to mock global feeds
         * @example cy.mockGlobalFeeds()
         */
        mockGlobalFeeds(): Chainable<any>;
        
        /**
         * Custom command to mock tags
         * @example cy.mockTags()
         */
        mockTags(): Chainable<any>;

        /**
         * Custom command to click on link
         * @example cy.clickLink('Test')
         */
        clickLink(label: string): Chainable<any>;

        /**
         * Custom command to check a token in local storage
         * @example cy.checkToken('abc123') 
         */
        checkToken(token: string): Chainable<any>;

        /**
         * Custom command to download file in a path
         * @example cy.downloadFile('https://path_to_file.pdf', 'mydownloads', 'demo.pdf')
         */
        downloadFile(url: string, directory: string, fileName: string): Chainable<any>;

        /**
         *  Custom command to get session storage
         * @example cy.getSessionStorage('token').should('eq', 'abc123')
         */
        getSessionStorage(key: string): Chainable<any>;

        /**
         * Custom command to set session storage
         * @example cy.setSessionStorage('token', 'abc123')
         */
        setSessionStorage(key: string, value: String): Chainable<any>;

        /**
         * Custom command to login user email and password
         * @example cy.typeLogin({ email: 'fake@email.com', password: 'Secret1' })
         */
        typeLogin(user: {}): Chainable<any>;

        /**
         * Custom command to login by api request
         * @example cy.login('admin')
         */
        login(userType: string, options: {}): Chainable<any>;

        /**
         * Custom command to ui logout
         * @example cy.logout()
         */
        logout(): Chainable<any>;

        /**
         * Custom command to create a user
         * @example cy.createUser({
                                    id: 123,
                                    name: 'Jane Lane'
                                })
         */
        createUser(user: {}): Chainable<any>;
    }
}
