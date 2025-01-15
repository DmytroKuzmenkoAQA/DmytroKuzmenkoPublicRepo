const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.amazon.com/',
    viewportWidth: 1400,
    viewportHeight: 1200,
  },
})