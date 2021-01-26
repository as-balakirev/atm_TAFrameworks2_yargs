const yargs = require('yargs').argv;

exports.config = {

    directConnect: true,

    framework: 'mocha',

    specs: [
        '../specs/*.test.js'
    ],

    capabilities: {
        'browserName': yargs.firefox ? 'firefox' : 'chrome',
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
    },

    baseUrl: 'localhost',

    mochaOpts: {
        reporter: 'mochawesome',
        reporterOptions: {
          overwrite: true
        },
        timeout: 70000
    }
};