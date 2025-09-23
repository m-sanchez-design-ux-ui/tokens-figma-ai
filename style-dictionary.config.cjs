const StyleDictionary = require('style-dictionary');

const config = {
  source: ['./src/tokens/tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables'
      }]
    },
    js: {
      transformGroup: 'web',
      buildPath: 'build/js/',
      files: [{
        destination: 'tailwind-tokens.js',
        format: 'javascript/module'
      }]
    }
  }
};

module.exports = config;