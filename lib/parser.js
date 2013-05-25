/**
 * Expression map
 */

var exprs = {
  'every': 'noop',
  '\d+': 'digit',
};

/**
 * Export `parse`
 */

module.exports = parse;

function parse(str) {
  str = str.trim();

  var toks = [];
  var items = str.split(/\s+/);

  while (items.length) {

  }

  /**
   * next
   */

  function next() {
    return digit()
      || blank()
      || text();
  }

  /**
   * digit
   */

  function digit() {
    var m = str.match(/^\d+/);
    if (!m) return;
    str = str.slice(m[0].length);
    return ['digit', m[0]];
  }

  /**
   * text
   */

  function text() {
    var m = str.match(/^\w+/)
    if (!m) return;
    str = str.slice(m[0].length);
    return ['text', m[0]];
  }

  // /**
  //  * peek
  //  */

  // function peek() {
  //   return str.charAt(pos);
  // }

  // /**
  //  * consume
  //  */

  // function consume(n) {
  //   str = str.substr(n);
  //   pos = 0;
  // }

  // *
  //  * lookahead


  // function lookahead(n) {
  //   return str.charAt(n);
  // }

  // /**
  //  * scan
  //  */

  // function scan() {

  // }

  // /**
  //  * digit
  //  */

  // function digit() {

  // }
}

// /**
//  * Initialize `Parser`
//  *
//  * @param {String} str
//  * @return {Object}
//  */

// function Parser(str) {
//   if(!(this instanceof Parser)) return new Parser(str);
//   var toks = str.split(/\s+/);
//   this.tokens = [];
//   this.interval = null;
//   this.offset = 0;

//   for (var i = 0, len = toks.length; i < len; i++) {
//     tok = toks[i];
//     this.digit(tok);
//     this.hour(tok);

//     if (this.token) {
//       this.tokens.push(this.token);
//       this.token = null;
//     }
//   };

//   return this.tokens;
// }

// /**
//  * Noop
//  */

// // Parser.prototype.noop = function(tok) {
// //   // if (tok)
// // };

// /**
//  * Digit
//  */

// Parser.prototype.digit = function(tok) {
//   if (!/\d+/.test(tok)) return;
//   this.token = ['digit', tok];
// };

// /**
//  * Hour
//  */

// Parser.prototype.hour = function(tok) {

// };

var p = parse;
console.log(p('every 2 hours'));
