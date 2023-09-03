[![Build Status](https://github.com/dipjyotimetia/CypressTest/workflows/CypressCI/badge.svg)](https://github.com/dipjyotimetia/CypressTest/actions)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/d463521f/CypressTestFramework)

## Cypress Test Framework

![image](./doc/CypressTestFramework.png)

### Sorry Cypress Dashboard
![image](./doc/SorryCypressDashboard.png)
![image](./doc/SorryCyResult.png)

### Cypress Test Result
![image](./doc/CyResult.png)

#### Installation:

- Install _nodejs 18.16.0 lts_ [Link](https://nodejs.org/en/download/)
- Install Vscode [link](https://code.visualstudio.com/download)

#### Project Setup:

- git clone repo
- npm install

#### Write Code:

- Add `/// <reference types="Cypress" />` and `/// <reference types="../support" />` if required `/// <reference types="cypress-downloadfile"/>` reference on the top, to get typed reference.
- Add new spec file with the format TC00*\_SampleTest*\_spec.js
- Write functions in PageObjects as E.g login
- Write helper methods in _support/actions.js_
- Add test data in _data/testdata.js_
- Add mock data files in _fixtures/_

#### Configure/update/set Test Environments:

- Open config and update test environment urls,user,pass and update it to config.js
- Test environment json files names are case sensitive
- To run test on specific environment update `configFile=uat or configFile=prod`

#### Setup SorryCypress Dashboard:
- `docker-compose up -d`

#### Test:

- `test:cypress` run tests in sorry cypress dashboard
- `npm run cy:chrome` run tests in chrome browser
- `npm run cypress:open` for test development and run(_Test Watcher is set to false_)
- `npm run cy:test` run all tests in headless
- `npx cypress run --env configFile=test --headed --spec 'cypress/integration/TC002_Login_Spec.js'` To run specific test in chrome

#### Generate Report Locally:

- `npm run combine-reports` to combine mocha json report
- `npm run generate-report` to generate html report
