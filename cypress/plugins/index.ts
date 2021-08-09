import fs = require('fs-extra');
import path = require('path');
import chalk = require('chalk');
import timeStamp = require('date-fns');
const { lighthouse, prepareAudit } = require("cypress-audit");
const ReportGenerator = require("lighthouse/report/report-generator");
// const { install, ensureBrowserFlags } = require('@neuralegion/cypress-har-generator');
import { downloadFile } from 'cypress-downloadfile/lib/addPlugin';

let logTime = timeStamp.format(new Date(), 'yyyy-MM-dd hh:mm:ss');

const getConfigurationByFile = (file: any) => {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  // install(on, config);

  on('task', { downloadFile })

  on('before:browser:launch', (browser = {}, launchOptions: { args: { push: (arg0: string) => void; fullscreen: boolean; }; }) => {
    // ensureBrowserFlags(browser, launchOptions);
    prepareAudit(launchOptions);
    return launchOptions;
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

  on("task", {
    lighthouse: lighthouse((lighthouseReport) => {
      const dirPath = './cypress/perfReport'
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
      }
      fs.writeFileSync(`${dirPath}/lhreport.html`, ReportGenerator.generateReport(lighthouseReport.lhr, 'html'));
    }),
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
