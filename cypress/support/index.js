require('cypress-xpath');
import './commands';
import 'cypress-ntlm-auth/dist/commands';
require('cypress-plugin-retries');
const addContext = require('mochawesome/addContext');

Cypress.on('test:after:run', (test, runnable) => {
    if(test.state == 'failed') {
        addContext({ test }, `../cypress/screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`)
    }
    //If video is required
    //addContext({ test },  `../cypress/videos/${Cypress.spec.name}.mp4`);
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

Cypress.on('fail', (error, runnable) => {
    debugger
    throw error;
  })

