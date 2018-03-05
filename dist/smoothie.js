(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.smoothie = mod.exports;
  }
})(this, function (module, exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    // Push defaults into config object
    config = _extends({}, defaultConfig, config);
    // Get the elements marked for smooth scrolling
    var elements = document.querySelectorAll('[data-smoothie]');
    // For each element get href value
    Array.from(elements).forEach(function (element) {
      // Save the href value from each element
      var link = element.getAttribute('href');
      // Create the click events
      element.addEventListener('click', function (event) {
        // Prevent default behavior
        event.preventDefault();
        // Load proper hash in the url
        history.pushState(null, null, link);
        // Scroll into view the element
        document.querySelector(link).scrollIntoView(config);
      });
    });
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var defaultConfig = {
    // Where to align the element
    block: 'start',
    // Animation method
    behavior: 'smooth'
  };

  module.exports = exports['default'];
});