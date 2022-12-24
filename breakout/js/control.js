
keyStartStop = (event) => {
    if (event.key === ' ') {
        game.toggle()
    }
}

keyNewGame = (event) => {
    if (event.key === 'N' || event.key == 'n') {
        if (game.isAllBricksDestroyed()) {
            toggleYouWin()
        }
        game.newGame()
    }
}


keyToggleYouLose = (event) => {
    if (event.key === 'Escape' && document.getElementById('youLose').style.visibility === 'visible')
        toggleYouLose()
}

keyToggleLevelComplete = (event) => {
    if (event.key === 'Enter' && document.getElementById('levelComplete').style.visibility === 'visible')
        toggleLevelComplete()
}


mouseMove = (event) => {
    const relativeX = event.clientX - (document.body.clientWidth - game.canvas.clientWidth) / 2
    if (relativeX > 0 && relativeX < game.canvas.width) {
        game.paddle.dx = relativeX - game.paddle.x
        // game.paddle.x = relativeX
        game.paddle.moveTo(relativeX, game.paddle.y)
    }
}


registerListeners = () => {
    document.body.addEventListener('keydown', keyStartStop)
    document.body.addEventListener('keydown', keyNewGame)
    document.body.addEventListener('keydown', keyToggleYouLose)
    document.body.addEventListener('keydown', keyToggleLevelComplete)
    document.addEventListener('mousemove', mouseMove)
}
