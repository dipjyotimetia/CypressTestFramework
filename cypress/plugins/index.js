const ntlmAuth = require('cypress-ntlm-auth/dist/plugin');

import { readJson } from "fs-extra";
import { resolve } from "path";

const getConfigurationByFile = (file) => {
  const pathToConfigFile = resolve('..', 'cypress/config', `${file}.json`)

  return readJson(pathToConfigFile)
}

module.exports = (on, config) => {

  on('before:browser:launch', (browser = {}, args) => {

    // config = ntlmAuth.initNtlmAuth(config);

    if (browser.name === 'chrome') {
      args.push('--remote-debugging-port=9222')

      return args
    }

    const file = config.env.configFile || 'development'

    return getConfigurationByFile(file)
  })
}
