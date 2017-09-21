'use strict'

const APIError = require('./APIError')

/**
 * Forbidden error class
 *
 * Creates a 403 Forbidden error
 *
 * @class Forbidden
 * @extends Error
 */
class Forbidden extends APIError {
  constructor () {
    super('Forbidden')
    this.status = 403
  }
}

module.exports = Forbidden
