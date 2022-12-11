
keyStartStop = (event) => {
    if (event.key === ' ') {
        game.toggle()
    }
}

keyNewGame = (event) => {
    if (event.key === 'N' || event.key == 'n') {
        game.newGame()
    }
}

keyLeftRightDown = (event) => {
    if (event.key === 'ArrowLeft') {
        game.paddle.dx = -game.paddle.stepWidth
    } else if (event.key === 'ArrowRight') {
        game.paddle.dx = Math.abs(game.paddle.stepWidth)
    }
}

keyLeftRightUp = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        game.paddle.dx = 0
    }
}


keyToggleYouLose = (event) => {
    if (event.key === 'Escape' && document.getElementById('youLose').style.visibility === 'visible')
        toggleYouLose()
}


registerListeners = () => {
    document.body.addEventListener('keydown', keyStartStop)
    document.body.addEventListener('keydown', keyNewGame)
    document.body.addEventListener('keydown', keyLeftRightDown)
    document.body.addEventListener('keyup', keyLeftRightUp)
    document.body.addEventListener('keydown', keyToggleYouLose)
}
