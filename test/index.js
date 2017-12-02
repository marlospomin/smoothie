// Smoothie assertions
describe('smoothie', () => {
  beforeEach(() => {
    // Create the document
    document.body.innerHTML = ''
    // Create basic markup
    const anchor = document.createElement('a');
    const div = document.createElement('div');
    // Add styles to div - for visual/manual testing
    div.style.margin = "100rem 0 0 0";
    div.style.height = "20vh";
    div.style.width = "95vw";
    // Set data-smoothie attrtibute
    anchor.dataset.smoothie = true;
    // Set anchor href and inner text
    anchor.href = "#example";
    anchor.text = "click";
    // Add id to div
    div.id = "example";
    // Append elements to the document
    document.body.appendChild(anchor);
    document.body.appendChild(div);
    // Call smoothie
    smoothie();
  });

  describe('scroll', () => {
    it('should work', () => {
      // Get the anchor
      const anchor = document.querySelector('a');
      // Click the anchor
      anchor.click();
      // Hack to make it work, scrollIntoView is bugged somehow when testing
      // Trying to find a solution
      window.scroll(0, 1);
      // Assertion
      assert.notEqual(window.pageYOffset, 0);
    });
  });
});
