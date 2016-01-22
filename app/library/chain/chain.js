/****
 * nodejs test window will make error
 */
// Include syntactic sugar to help the development of our interface.
Function.prototype.method = function(name, fn) {
  this.prototype[name] = fn;
  return this;
};
(function() {
  function _$(els) {
  }
  _$.method('addEvent', function(type, fn) {
  }).method('getEvent', function(e) {
  }).method('addClass', function(className) {
  }).method('removeClass', function(className) {
  }).method('replaceClass', function(oldClass, newClass) {
  }).method('hasClass', function(className) {
  }).method('getStyle', function(prop) {
  }).method('setStyle', function(prop, val) {
  }).method('load', function(uri, method) {
  });
  window.$ = function() {
    return new _$(arguments);
  }
  window.installHelper = function(scope, interface) {
    scope[interface] = function() {
      return new _$(arguments);
    }
  };
})();


/* Usage. */

installHelper(window, '$');

/* Another usage example. */

// Define a namespace without overwriting it if it already exists.
window.com = window.com || {};
com.example = com.example || {}; 
com.example.util = com.example.util || {};

installHelper(com.example.util, 'get');

(function() {
  var get = com.example.util.get;
  get('test1').addEvent('click', function(e) {
    get(this).addClass('hello');
  });
})();
