const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const timeStamp = require('date-fns');
const { install, ensureRequiredBrowserFlags } = require('@neuralegion/cypress-har-generator');

let logTime = timeStamp.format(new Date(), 'yyyy-MM-dd hh:mm:ss');

const getConfigurationByFile = (file) => {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  install(on,config);
  // require('cypress-plugin-retries/lib/plugin')(on)

  on('before:browser:launch', (browser = {}, args) => {
    ensureRequiredBrowserFlags(browser,args);
    if (browser.name === 'chrome') {
      args.push('--start-fullscreen')
      args.push('--no-sandbox')
      args.push('--disable-gpu')
      return args;
    }

    if (browser.name === 'electron') {
      args.fullscreen = true;

      return args;
    }
  });

  on('task', {
    info(message) {
      console.log(chalk.yellow(`    INFO - ${logTime}; ${message}`))
      return null
    }
  });

  on('task', {
    fail(message) {
      console.log(chalk.bgRed(`    ERROR - ${logTime}; ${message}`))
      return null
    }
  });

  const file = config.env.configFile || 'test'

  return getConfigurationByFile(file);
}
