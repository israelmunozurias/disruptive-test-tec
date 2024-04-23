'use strict';

/**
 * Module dependencies.
 */

const path = require('path');

const development = require('./development');
const test = require('./test');
const production = require('./production');

const notifier = {
  service: 'postmark',
  APN: false,
  email: true, // true
  actions: ['comment'],
  //tplPath: path.join(__dirname, '..', 'app/mailer/templates'),
  key: 'POSTMARK_KEY'
};

const defaults = {
  root: path.join(__dirname, '..'),
  notifier: notifier
};

/**
 * Expose
 */

module.exports = {
  development: development ,
  test: test,
  production: production
}[process.env.NODE_ENV || 'development'];
