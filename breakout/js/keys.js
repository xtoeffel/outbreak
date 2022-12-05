registerKeys = () => {
    let bar = document.getElementById('bar')
    let stepWidth = 1.5
    const initLeft = 46

    document.addEventListener('keydown', (event) => {
        let currentLeft = bar.style.left == '' ? initLeft : Number(bar.style.left.replace('%', ''))
        if (event.key == 'ArrowLeft') {
            bar.style.left = (currentLeft - stepWidth) + "%"
        }
        if (event.key == 'ArrowRight') {
            bar.style.left = (currentLeft + stepWidth) + "%"
        }
    })
}