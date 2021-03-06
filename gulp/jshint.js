/**
 * Provides JSHint best-practice linting support with Gulp.
 *
 * @since 0.1.0
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 */

const {src} = require('gulp');

const $ = require('gulp-load-plugins')();  // eslint-disable-line id-length


/**
 * Parent function that provides parameter support for this Gulp task.
 *
 * @param {Array} files - an array of files that makeup the source code to lint
 *
 * @returns {Function} the Gulp task
 */
module.exports = (files) => {

  /**
   * Runs JSHint on the files provided when the module was imported.
   *
   * @returns {Stream} Gulp task stream
   */
  const jshint = () => src(files)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));

  jshint.description = 'Runs best-practice linting on the codebase.';

  return jshint;

};
