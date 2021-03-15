
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./validate-css-value.cjs.production.min.js')
} else {
  module.exports = require('./validate-css-value.cjs.development.js')
}
