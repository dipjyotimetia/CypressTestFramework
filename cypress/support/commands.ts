// @ts-check
import 'cypress-file-upload';
import '@testing-library/cypress/add-commands'
import '@percy/cypress'
import 'cypress-downloadfile/lib/downloadFileCommand'
import "cypress-audit/commands";
import '@testing-library/cypress/add-commands'

// custom command to make taking snapshots with full name
// formed from the test title + suffix easier
// cy.visualSnapshot() // default full test title
// cy.visualSnapshot('clicked') // full test title + ' - clicked'
// also sets the width and height to the current viewport
// @ts-ignore
Cypress.Commands.add("visualSnapshot", (maybeName) => {
    // @ts-ignore
    let snapshotTitle = cy.state("runnable").fullTitle();
    if (maybeName) {
        snapshotTitle = snapshotTitle + " - " + maybeName;
    }
    cy.percySnapshot(snapshotTitle, {
        // @ts-ignore
        widths: [cy.state("viewportWidth")],
        // @ts-ignore
        minHeight: cy.state("viewportHeight"),
    });
});

Cypress.Commands.add("login", (...states) => {
    cy.request({
        url: `${Cypress.env('BASE_API')}/integration/state`,
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ states: states })
    });
});

// @ts-ignore
Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[data-test=${selector}]`, ...args);
});

// @ts-ignore
Cypress.Commands.add("getBySelLike", (selector, ...args) => {
    return cy.get(`[data-test*=${selector}]`, ...args);
});

/**
 * Clear mock server
 */
Cypress.Commands.add('clearMock', () => {
    cy.server({ enable: false });
});

Cypress.Commands.add('mockGlobalFeeds', () => {
    cy.server()
        .fixture('globalFeeds/feeds').as('feeds')
        .route('GET', '/api/articles?limit=10&offset=0', '@feeds').as('globalFeed');
})

Cypress.Commands.add('mockTags', () => {
    cy.server()
        .fixture('tags/tags').as('tag')
        .route('GET', '/api/tags', '@tag').as('tags');
})

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click()
});

Cypress.Commands.add('checkToken', (token) => {
    cy.window()
        .its('localStorage.token')
        .should('eq', token)
});

Cypress.Commands.add('downloadFile', (url, directory, fileName) => {
    return cy.getCookies().then((cookies) => {
        return cy.task('downloadFile', {
            url,
            directory,
            cookies,
            fileName,
        })
    })
});

Cypress.Commands.add('getSessionStorage', (key) => {
    cy.window().then((window) => window.sessionStorage.getItem(key))
});

Cypress.Commands.add('setSessionStorage', (key, value) => {
    cy.window().then((window) => {
        window.sessionStorage.setItem(key, value)
    })
});

Cypress.Commands.add('typeLogin', (user) => {
    cy.get('input[name=email]')
        .type(user.email)

    cy.get('input[name=password]')
        .type(user.password)
});

Cypress.Commands.add('login', (userType, options = {}) => {
    // this is an example of skipping your UI and logging in programmatically

    // setup some basic types
    // and user properties
    const types = {
        admin: {
            name: 'Jane Lane',
            admin: true,
        },
        user: {
            name: 'Jim Bob',
            admin: false,
        }
    }

    // grab the user
    const user = types[userType]

    // create the user first in the DB
    cy.request({
        url: '/seed/users', // assuming you've exposed a seeds route
        method: 'POST',
        body: user,
    })
        .its('body')
        .then((body) => {
            // assuming the server sends back the user details
            // including a randomly generated password
            //
            // we can now login as this newly created user
            cy.request({
                url: '/login',
                method: 'POST',
                body: {
                    email: body.email,
                    password: body.password,
                }
            })
        })
})

Cypress.Commands.add('logout', () => {
    cy.contains('Login').should('not.exist')
    cy.get('.avatar').click()
    cy.contains('Logout').click()
})

Cypress.Commands.add('logout', () => {
    cy.window().its('localStorage')
        .invoke('removeItem', 'session')

    cy.visit('/login')
})

Cypress.Commands.add('createUser', (user) => {
    cy.request({
        method: 'POST',
        url: 'https://www.example.com/tokens',
        body: {
            email: 'admin_username',
            password: 'admin_password'
        }
    }).then((resp) => {
        cy.request({
            method: 'POST',
            url: 'https://www.example.com/users',
            headers: ({ Authorization: 'Bearer ' + resp.body.token }),
            body: user
        })
    })
})

Cypress.Commands.add("loginByGoogleApi", () => {
    cy.log("Logging in to Google");
  
    cy.request({
      method: "POST",
      url: "https://www.googleapis.com/oauth2/v4/token",
      body: {
        grant_type: "refresh_token",
        client_id: Cypress.env("googleClientId"),
        client_secret: Cypress.env("googleClientSecret"),
        refresh_token: Cypress.env("googleRefreshToken"),
      },
    }).then(({ body }) => {
      const { access_token, id_token } = body;
  
      cy.request({
        method: "GET",
        url: "https://www.googleapis.com/oauth2/v3/userinfo",
        headers: { Authorization: `Bearer ${access_token}` },
      }).then(({ body }) => {
        cy.log(body);
        const userItem = {
          token: id_token,
          user: {
            googleId: body.sub,
            email: body.email,
            givenName: body.given_name,
            familyName: body.family_name,
            imageUrl: body.picture,
          },
        };
  
        window.localStorage.setItem("googleCypress", JSON.stringify(userItem));
  
        cy.visit("/");
      });
    });
  });

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//     const domain = Cypress.env('BASE_DOMAIN')

//     if (domain === '...') {
//         url = '...'
//     }

//     if (options.something === 'else') {
//         url = '...'
//     }

//     // originalFn is the existing `visit` command that you need to call
//     // and it will receive whatever you pass in here.
//     //
//     // make sure to add a return here!
//     return originalFn(url, options)
// });

// Cypress.Commands.overwrite('screenshot', (originalFn, subject, name, options) => {
//     // call another command, no need to return as it is managed
//     cy.get('.app')
//         .should('be.visible')

//         // overwrite the default timeout, because screenshot does that internally
//         // otherwise the `then` is limited to the default command timeout
//         .then({ timeout: Cypress.config('responseTimeout') },
//             () => {
//                 // return the original function so that cypress waits for it
//                 return originalFn(subject, name, options)
//             })
// });

Cypress.Commands.add('setSessionStorage', (key, value) => {
    // Turn off logging of the cy.window() to command log
    cy.window({ log: false }).then((window) => {
        window.sessionStorage.setItem(key, value)
    })

    const log = Cypress.log({
        name: 'setSessionStorage',
        // shorter name for the Command Log
        displayName: 'setSS',
        message: `${key}, ${value}`,
        consoleProps: () => {
            // return an object which will
            // print to dev tools console on click
            return {
                'Key': key,
                'Value': value,
                'Session Storage': window.sessionStorage
            }
        }
    })
});