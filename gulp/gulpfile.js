/**
 * Provides automation support for building and testing applications.
 *
 * @since 0.1.0
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 */

const {series} = require('gulp');


/**
 * Master list of files used by various Gulp tasks.
 */
const files = {
  source : [
    'gulp/**/*.js',
  ],
};


/**
 * `gulp hello`
 *
 * Placeholder until Gulp is properly used.
 */
exports.hello = require('./hello-world');


/**
 * `gulp`
 *
 * Default task to run when Gulp is called.
 */
exports.default = exports.hello;
