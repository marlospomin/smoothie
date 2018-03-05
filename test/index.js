describe('smoothie', () => {
  beforeEach(() => {
    // Create basic markup
    const anchor = document.createElement('a')
    const div = document.createElement('div')
    // Add styles to div
    div.style.marginTop = "100rem"
    div.style.height = "20vh"
    div.style.width = "95vw"
    // Set data-smoothie attrtibute
    anchor.dataset.smoothie = true
    // Set anchor href
    anchor.href = "#example"
    // Add id to div
    div.id = "example"
    // Append elements to the document
    document.body.appendChild(anchor)
    document.body.appendChild(div)
    // Call smoothie
    smoothie()
  })

  describe('url', () => {
    it('should contain a hash', () => {
      // Store current (old) url
      const oldUrl = window.location.href
      // Get the anchor
      const anchor = document.querySelector('a')
      // Click the anchor
      anchor.click()
      // Assertion
      expect(oldUrl).not.to.equal(window.location.href)
    })
  })

  describe('scroll', () => {
    it('should work', () => {
      // Get the anchor and div
      const anchor = document.querySelector('a')
      const div = document.querySelector('div')
      // Click the anchor
      anchor.click()
      // Assertion
      assert.isAbove(div.offsetTop, 1000)
    })
  })
})
