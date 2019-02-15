/**
 * Placeholder task until proper Gulp tasks are generated.
 *
 * @since 0.1.0
 * @author Andrew Vaughan <hello@andrewvaughan.io>
 */


/**
 * Respond with Hello World when invoked by Gulp.
 *
 * @param {callback} done - the callback to call when the task is complete
 */
const helloWorld = (done) => {

  console.log('Hello World');
  done();

};

// Parameters to improve Gulp functionality
helloWorld.description = "Says hello!";

module.exports = helloWorld;
