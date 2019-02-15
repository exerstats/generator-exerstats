/**
 * Provides automation support for building and testing applications.
 *
 * @since 0.1.0
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 */

const {series} = require('gulp'),
  extend = require('extend');


/**
 * Master list of files used by various Gulp tasks.
 */
const files = {
  source : [
    'gulp/**/*.js',
  ],
};


/**
 * `gulp lint`
 *
 * Performs style and standards tests on the codebase.
 */
exports.lint = series(
  require('./jshint')(extend(files.source, files.tests)),
  require('./eslint')(extend(files.source, files.tests))
);

exports.lint.description = 'Runs code-style and best-practice linting.';


/**
 * `gulp test`
 *
 * Performs unit tests and linting on the codebase.
 */
exports.test = series(
  exports.lint
);

exports.test.description = 'Runs all linting and unit tests.';


/**
 * `gulp`
 *
 * Default task to run when Gulp is called.
 */
exports.default = exports.test;
