require('dd-trace').init({
  service: 'dd-trace-test',
  flushInterval: 300000
})

module.exports = require('jest-environment-node')
