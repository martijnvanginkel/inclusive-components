const sections = document.querySelectorAll('.section')

sections.forEach(section => {
  const button = section.querySelector('button')
  const content = section.querySelector('p')

  button.onclick = () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'false' ? false : true 
    
    if (isExpanded) {
      button.setAttribute('aria-expanded', false)
      content.hidden = true 
    }
    else {
      button.setAttribute('aria-expanded', true)
      content.hidden = false
    }
  }
})
