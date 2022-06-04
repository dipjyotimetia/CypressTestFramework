import { defineConfig } from "cypress";
module.exports = defineConfig({
    projectId: "vfepbj",
    chromeWebSecurity: false,
    defaultCommandTimeout: 4000,
    downloadsFolder: 'cypress/downloads',
    retries: {
        runMode: 1,
        openMode: 1,
    },
    video: false,
    videoCompression: 32,
    videosFolder: 'cypress/videos',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    e2e: {
        specPattern: "cypress/e2e/*.cy.{js,jsx,ts,tsx}",
        supportFile: "cypress/support/e2e.ts"
    }
})