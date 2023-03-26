import { defineConfig } from "cypress";
import fs from 'fs-extra';
import path from 'path';
import { format } from 'date-fns';
import { downloadFile } from 'cypress-downloadfile/lib/addPlugin';

let logTime = format(new Date(), 'yyyy-MM-dd hh:mm:ss');

const getConfigurationByFile = (file) => {
    const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
    return fs.readJson(pathToConfigFile)
}

export default defineConfig({
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
    env: {
        // Auth0
        auth0_username: process.env.AUTH0_USERNAME,
        auth0_password: process.env.AUTH0_PASSWORD,
        auth0_domain: process.env.REACT_APP_AUTH0_DOMAIN,
        auth0_audience: process.env.REACT_APP_AUTH0_AUDIENCE,
        auth0_scope: process.env.REACT_APP_AUTH0_SCOPE,
        auth0_client_id: process.env.REACT_APP_AUTH0_CLIENTID,
        auth0_client_secret: process.env.AUTH0_CLIENT_SECRET,
        auth_token_name: process.env.REACT_APP_AUTH_TOKEN_NAME,

        // Okta
        okta_username: process.env.OKTA_USERNAME,
        okta_password: process.env.OKTA_PASSWORD,
        okta_domain: process.env.REACT_APP_OKTA_DOMAIN,
        okta_client_id: process.env.REACT_APP_OKTA_CLIENTID,

        // Google
        googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        googleClientId: process.env.REACT_APP_GOOGLE_CLIENTID,
        googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    },
    // component: {
    //     devServer,
    //     specPattern: "src/**/*.cy.{js,jsx,ts,tsx}",
    //     supportFile: "cypress/support/component.ts",
    //     setupNodeEvents(on, config) {
    //         codeCoverageTask(on, config);
    //         return config;
    //     },
    // },
    e2e: {
        specPattern: "cypress/e2e/*.cy.{js,jsx,ts,tsx}",
        supportFile: "cypress/support/e2e.ts",
        setupNodeEvents(on, config) {
            on('task', { downloadFile })

            // on('before:browser:launch', (browser = {}, browserLaunchOptions: { args: { push: (arg0: string) => void; fullscreen: boolean; }; }) => {
            // //   ensureBrowserFlags(browser, browserLaunchOptions);
            //   prepareAudit(launchOptions);
            //   return launchOptions;
            // });

            on('task', {
                info(message) {
                    console.log(`    INFO - ${logTime}; ${message}`)
                    return null
                }
            });

            on('task', {
                fail(message) {
                    console.log(`    ERROR - ${logTime}; ${message}`)
                    return null
                }
            });

            on('task', {
                updateFixture(filePath) {
                    const rawData = fs.readFileSync(filePath, 'utf8');
                    const context = JSON.parse(rawData);
                    context.FreeBetBoost.Items.find(e => e.BoostType === 'Multi').forEach(e1 => {
                        e1.PromotionName = 'Multi'
                    });
                    fs.writeFileSync(filePath, JSON.stringify(context));
                    return null
                },

                deleteFixture(filePath) {
                    fs.unlinkSync(filePath);
                }
            });

            const file = config.env.configFile || 'test'

            return getConfigurationByFile(file);
        }
    }
})