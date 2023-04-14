const tabs = document.querySelectorAll('[role="tab"]')
const tabPanels = document.querySelectorAll('[role="tabpanel"]')

const focusTab = (targetIndex) => {
  tabs.forEach((tab, tabIndex) => {

    if (targetIndex === tabIndex) {
      tab.removeAttribute('tabindex')
      tab.setAttribute('aria-selected', true)
      tabPanels[tabIndex].hidden = false
      tab.focus()
      return
    }

    tab.tabIndex = -1
    tab.removeAttribute('aria-selected')
    tabPanels[tabIndex].hidden = true
  })
}

tabs.forEach((tab, index) => {
  tab.addEventListener('keydown', e => {

    if (e.which === 37) {
      const nextTabIndex = index <= 0 ? tabs.length - 1 : index - 1
      focusTab(nextTabIndex)
    }
    else if (e.which === 39) {
      const nextTabIndex = (index >= (tabs.length - 1)) ? 0 : index + 1
      focusTab(nextTabIndex)
    }
  })
})