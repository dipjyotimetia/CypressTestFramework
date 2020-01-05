const fs = require('fs-extra');
const path = require('path');

const getConfigurationByFile = (file) => {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {

  on('before:browser:launch', (browser = {}, args) => {

    if (browser.name === 'chrome') {
      args.push('--start-fullscreen')
      args.push('--remote-debugging-port=9222')

      return args;
    }

    if (browser.name === 'electron') {
      args.fullscreen = true;

      return args;
    }
  });
  const file = config.env.configFile || 'test'

  return getConfigurationByFile(file);
}
