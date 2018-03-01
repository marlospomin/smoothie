const defaultConfig = {
  // Where to align the element
  block: 'start',
  // Animation method
  behavior: 'smooth'
}

export default function (config = {}) {
  // Push defaults into config object
  config = { ...defaultConfig, ...config }
  // Get the elements marked for smooth scrolling
  const elements = document.querySelectorAll('[data-smoothie]')
  // For each element get href value
  Array.from(elements).forEach((element) => {
    // Save the href value from each element
    let link = element.getAttribute('href')
    // Create the click events
    element.addEventListener('click', (event) => {
      // Prevent default behavior
      event.preventDefault()
      // Load proper hash in the url
      history.pushState(null, null, link)
      // Scroll into view the element
      document.querySelector(link).scrollIntoView(config)
    })
  })
}
