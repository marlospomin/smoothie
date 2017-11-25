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
    // Get the elements marked for smooth scrolling
    var elements = document.querySelectorAll('[data-smoothie]');
    // Save the href value
    var link = void 0;
    // For each element get href value
    Array.from(elements).forEach(function (element) {
      // Save the href value from each element
      link = element.getAttribute('href');
      // Wrap as a closure
      (function (link) {
        element.addEventListener('click', function (event) {
          // Prevent default behavior
          event.preventDefault();
          // Load proper hash in the url
          history.pushState(null, null, link);
          // Scroll into view the element
          document.querySelector(link).scrollIntoView({
            // Set the animation method
            behavior: 'smooth'
          });
        });
      })(link);
    });
  };

  module.exports = exports['default'];
});