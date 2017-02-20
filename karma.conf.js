const webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    files: [
      'src/**/*.spec.js'
    ],
    preprocessors: {
      'src/**/*.spec.js': ['webpack']
    },
    frameworks: ['jasmine'],
    webpack: webpackConfig,
    autoWatch: true,
    browsers: ['Chrome']
  })
}
