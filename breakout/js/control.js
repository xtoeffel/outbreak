const stepWidth = 0.25
const initLeft = 46
var gameRunning = false


keyListener = (event) => {
    if (event.key == ' ') {
        if (gameRunning) {
            pauseGame()
        } else {
            startGame()
        }
    } else if (event.key == 'Escape' && gameRunning) {
        stopGame()
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


startGame = () => {
    document.addEventListener('mousemove', mouseMoveListener)
    var p = document.getElementById('userInfo')
    p.innerHTML = 'Press <span class="blue">ESC to stop</span>, <span class="green">SPACE to pause</span>.'
    gameRunning = true
}

stopGame = () => {
    document.removeEventListener('mousemove', mouseMoveListener)
    var p = document.getElementById('userInfo')
    p.innerHTML = 'Press <span class="green">SPACE to start</span> new game.'
    gameRunning = false
}

pauseGame = () => {
    var p = document.getElementById('userInfo')
    p.innerHTML = 'Press <span class="green">SPACE to continue</span>.'
    gameRunning = false
}
