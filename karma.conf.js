// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function(config) {
    config.set({
        basePath: '',
        plugins: [
            require('karma-jasmine'),
            require('karma-jasmine-given'),
            require('karma-mocha-reporter'),
            require('karma-jasmine-diff-reporter'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('@angular-devkit/build-angular/plugins/karma')
        ],
        frameworks: [ 'jasmine-given', 'jasmine', '@angular-devkit/build-angular' ],
        client: {
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/do'),
            reports: [ 'html', 'lcovonly', 'text-summary' ],
            fixWebpackSourcePaths: true
        },
        reporters: [ 'jasmine-diff', 'mocha' ],
        jasmineDiffReporter: {
            color: {
                expectedBg: 'bgMagenta',
                expectedWhitespaceBg: 'bgMagenta',
                actualBg: 'bgBlue',
                actualWhitespaceBg: 'bgBlue'
            }
        },
        mochaReporter: {
            output: 'minimal'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [ 'ChromeHeadless' ],
        singleRun: false,
        restartOnFileChange: true
    });
};
