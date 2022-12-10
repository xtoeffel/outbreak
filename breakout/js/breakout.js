let ballInterval


keyListener = (event) => {
    if (event.key == ' ') {
        if (gameRunning) {
            pauseBarMove()
            stopGame()
        } else {
            startBarMove()
            startGame()
        }
    } else if (event.key == 'Escape' && gameRunning) {
        stopBarMove()
        stopGame()
    }
}


registerKeyListener = () => {
    document.addEventListener('keydown', keyListener)
}


startGame = () => {
    ballInterval = setInterval(moveBall, 10)

}

stopGame = () => {
    if (ballInterval != null)
        clearInterval(ballInterval)
}