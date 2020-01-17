[![Build Status](https://github.com/dipjyotimetia/CypressTest/workflows/CypressCI/badge.svg)](https://github.com/dipjyotimetia/CypressTest/actions)

## Cypress WebUi Automation

<img src="https://cloud.githubusercontent.com/assets/1268976/20607953/d7ae489c-b24a-11e6-9cc4-91c6c74c5e88.png">

#### Installation:

- Install _nodejs 12.4.1 lts_ [Link](https://nodejs.org/en/download/)
- Install Vscode [link](https://code.visualstudio.com/download)

#### Project Setup:

- git clone repo
- npm install

#### Write Code:

- Add `/// <reference types="Cypress" />` and `/// <reference types="../support" />`reference on the top, to get typed reference.
- Add new spec file with the format TC00*\_SampleTest*\_spec.js
- Write functions in PageObjects as E.g login
- Write helper methods in _support/actions.js_
- Add test data in _data/testdata.js_
- Add mock data files in _fixtures/_

#### Configure/update/set Test Environments:

- Open config and update test environment urls,user,pass and update it to config.js
- Test environment json files names are case sensitive
- To run test on specific environment update `configFile=uat or configFile=prod`

#### Test:

- `npm run cy:chrome` run tests in chrome browser
- `npm run cypress:open` for test development and run(_Test Watcher is set to false_)
- `npm run cy:test` run all tests in headless
- `npx cypress run --env configFile=test --headed --spec 'cypress/integration/TC002_Login_Spec.js'` To run specific test in chrome

#### Generate Report Locally:

- `npm run combine-reports` to combine mocha json report
- `npm run generate-report` to generate html report

### Built With

- [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)
- [mocha](https://github.com/mochajs/mocha)
- [Chalk](https://github.com/chalk/chalk)
- [Chance](https://github.com/chancejs/chancejs)
- [Faker](https://github.com/marak/Faker.js/)
- [date-fns](https://github.com/date-fns/date-fns)
- [lodash](https://github.com/lodash/lodash)
- [cross-env](https://github.com/kentcdodds/cross-env)
  <!-- https://hackernoon.com/cypress-io-docker-the-ultimate-e2e-stack-a20ee25654b1 -->

<!-- https://medium.freecodecamp.org/how-to-test-your-frontend-with-the-cypress-io-framework-f048070f4330 -->

<!-- [![Debugging](http://img.youtube.com/vi/H0XScE08hy/0.jpg)](https://www.youtube.com/watch?v=H0XScE08hy8&feature=youtu.be) -->
