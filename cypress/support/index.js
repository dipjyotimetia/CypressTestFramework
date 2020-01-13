require('cypress-xpath');
import './commands';
import 'cypress-ntlm-auth/dist/commands';
require('cypress-plugin-retries');

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

Cypress.on('fail', (error, runnable) => {
    debugger
    throw error;
  })