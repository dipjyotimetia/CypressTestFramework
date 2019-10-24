const ntlmAuth = require('cypress-ntlm-auth/dist/plugin');

const fs = require('fs-extra');
const path = require('path');

const getConfigurationByFile = (file) => {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {

  on('before:browser:launch', (browser = {}, args) => {

    // config = ntlmAuth.initNtlmAuth(config);

    if (browser.name === 'chrome') {
      args.push('--remote-debugging-port=9222')

      return args
    }

    const file = config.env.configFile || 'test'

    return getConfigurationByFile(file)
  })
}
