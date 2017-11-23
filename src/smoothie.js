// Get element via custom tag - OK
// Get href value from target - OK
// Create an event listener on click - OK
// Upon click slideIntoView smoothly - OK
// If slideIntoView is not supported use polyfill
// Add custom options for behavior and custom tag

// Make sure hash is correct
// Update polyfill to es6 if possible
// Test headlessly with karma and mocha
// Refactor to use methods and functions
// Refactor to remove closure and overall cleanup

// Actual plugin
// Get the elements marked for smooth scrolling
const elements = document.querySelectorAll('[data-smoothie]');
// Save the href value
let link;
// For each element get href value
elements.forEach((element) => {
  // Save the href value from each element
  link = element.getAttribute('href');
  // Wrap as a closure
  ((link) => {
    element.addEventListener('click', (event) => {
      // Prevent default behavior
      event.preventDefault();
      // Scroll into view the element
      document.querySelector(link).scrollIntoView({
        // Set the animation method
        behavior: 'smooth'
      });
    });
  })(link);
});
