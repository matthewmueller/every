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
    if (until < offset) {
      setTimeout(function() {
        d = date(str);
        reset();
      }, offset);
    } else {
      setTimeout(run, until);
    }
  }
}
