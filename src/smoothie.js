export default function () {
  // Get the elements marked for smooth scrolling
  const elements = document.querySelectorAll('[data-smoothie]');
  // Save the href value
  let link;
  // For each element get href value
  Array.from(elements).forEach((element) => {
    // Save the href value from each element
    link = element.getAttribute('href');
    // Wrap as a closure
    ((link) => {
      element.addEventListener('click', (event) => {
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
}
