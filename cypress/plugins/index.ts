import fs = require('fs-extra');
import path = require('path');
import chalk = require('chalk');
import timeStamp = require('date-fns');
// const { install, ensureBrowserFlags } = require('@neuralegion/cypress-har-generator');
import percyHealthCheck = require("@percy/cypress/task");
import { downloadFile } from 'cypress-downloadfile/lib/addPlugin';

let logTime = timeStamp.format(new Date(), 'yyyy-MM-dd hh:mm:ss');

const getConfigurationByFile = (file) => {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  // install(on, config);

  on("task", percyHealthCheck);
  on('task', { downloadFile })

  on('before:browser:launch', (browser = {}, launchOptions: { args: { push: (arg0: string) => void; fullscreen: boolean; }; }) => {
    // ensureBrowserFlags(browser, launchOptions);
    if (browser.name === 'chrome') {
      launchOptions.args.push('--start-fullscreen')
      launchOptions.args.push('--no-sandbox')
      launchOptions.args.push('--disable-gpu')
      return launchOptions;
    }

    if (browser.name === 'electron') {
      launchOptions.args.fullscreen = true;

      return launchOptions;
    }
  });

  on('task', {
    info(message: any) {
      console.log(chalk.yellow(`    INFO - ${logTime}; ${message}`))
      return null
    }
  });

  on('task', {
    fail(message: any) {
      console.log(chalk.bgRed(`    ERROR - ${logTime}; ${message}`))
      return null
    }
  });

  on('task', {
    updateFixture(filePath: any) {
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
