

const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.style.cursor = 'pointer'
    const link = card.querySelector('a')

    card.addEventListener('mousedown', e => {
        let mouseDown = true
        card.addEventListener('mouseup', () => mouseDown = false)

        setTimeout(() => {
            if (!mouseDown) {
                link.click()
            }
        }, 200)
    })
})
