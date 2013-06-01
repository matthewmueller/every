/**
 * Module Dependencies
 */

try {
  var date = require('date');
} catch(e) {
  var date = require('date.js');
}

/**
 * Expose `every`
 */

module.exports = every;

/**
 * Initialize `every`
 *
 * @param {String} str
 * @param {Function} fn
 * @api public
 */

function every(str, fn) {
  var now = new Date;
  var d = date(str);
  var offset = d - now;
  var until = offset;

  if (0 == until) {
    throw new Error('did not recognize "' + str + '"');
  }

  setTimeout(run, until);

  function run() {
    d = date(str);
    if (!fn.length) {
      fn();
      reset();
    } else {
      fn(reset);
    }
  }

  function reset() {
    if (!offset) return;
    now = new Date;
    until = d - now;

    // if we're already past the time, reset immediately
    if (until < 0) {
      run();
    } else {
      setTimeout(run, until);
    }
  }
}
