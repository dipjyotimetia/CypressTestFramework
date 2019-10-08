const ntlmAuth = require('cypress-ntlm-auth/dist/plugin');

module.exports = (on, config) => {

  on('before:browser:launch', (browser = {}, args) => {

    // config = ntlmAuth.initNtlmAuth(config);

    if (browser.name === 'chrome') {
      args.push('--remote-debugging-port=9222')

      return args
    }

  })
}
