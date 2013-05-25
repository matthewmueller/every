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
  var until = d - now;

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
    now = new Date;
    until = d - now;
    setTimeout(run, until);
  }
}
