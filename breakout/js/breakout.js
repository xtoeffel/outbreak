let ballInterval


startGame = () => {
    ballInterval = setInterval(moveBall, 10)

}

stopGame = () => {
    if (ballInterval != null)
        clearInterval(ballInterval)
}