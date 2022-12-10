const stepWidth = 0.3
const initLeft = 46
var gameRunning = false


keyListener = (event) => {
    if (event.key == ' ') {
        if (gameRunning) {
            pauseBarMove()
        } else {
            startBarMove()
        }
    } else if (event.key == 'Escape' && gameRunning) {
        stopBarMove()
    }
}


registerKeyListener = () => {
    document.addEventListener('keydown', keyListener)
}


mouseMoveListener = (event) => {
    var bar = document.getElementById('bar')
    var currentLeft = bar.style.left == '' ? initLeft : Number(bar.style.left.replace('%', ''))
    if (event.movementX < 0 && currentLeft > 0.0) {
        bar.style.left = (currentLeft - stepWidth) + "%"
    }
    if (event.movementX > 0 && currentLeft < 90.0) {
        bar.style.left = (currentLeft + stepWidth) + "%"
    }
}


startBarMove = () => {
    document.addEventListener('mousemove', mouseMoveListener)
    moveBall()
    var p = document.getElementById('userInfo')
    p.innerHTML = 'Press <span class="blue">ESC to stop</span>, <span class="green">SPACE to pause</span>.'
    gameRunning = true
}

stopBarMove = () => {
    document.removeEventListener('mousemove', mouseMoveListener)
    var p = document.getElementById('userInfo')
    p.innerHTML = 'Press <span class="green">SPACE to start</span> new game.'
    gameRunning = false
}

pauseBarMove = () => {
    var p = document.getElementById('userInfo')
    p.innerHTML = 'Press <span class="green">SPACE to continue</span>.'
    gameRunning = false
}
