var game

init = () => {
    game = new Game()
    game.newGame()
}

/*
TODO:
- contain all objects that are on the screen
- control movement
- update / redraw
*/
class Game {
    constructor() {
        var ballColor = '#ffffff'
        var paddleColor = 'lightgreen'
        // TODO: remove strokes?
        var ballStroke = '#e4e4e4'
        var paddleStroke = '#e4e4e4'

        this.canvas = document.getElementById('game')
        this.ctx = this.canvas.getContext('2d')

        this.ball = new Ball(10, ballColor, ballStroke)
        this.paddle = new Paddle(60, 15, paddleColor, paddleStroke)

        this.redrawInterval = null
        this.running = false
        // TODO: add bricks

        // TODO: remove inits, only be called in newGame()
        this.#initPaddle()
        this.#initBall()
    }

    #initPaddle = () => {
        this.paddle.stepWidth = 4
        this.paddle.dx = 0
        this.paddle.dy = 0
        this.paddle.x = this.canvas.width / 2
        this.paddle.y = this.canvas.height - this.paddle.height - 15
    }

    #initBall = () => {
        this.ball.x = this.paddle.x
        this.ball.y = this.paddle.topY() - this.ball.radius
        this.ball.dx = 3
        this.ball.dy = -3
    }

    // TODO: detect collisions
    // TODO: move objects

    // loop and move stuff on the field
    // bounce ball
    // move panel
    // move other items
    // destroy bricks

    /*
    Collision
    - list of objects that can collide
    - call a method collision()
        - detects if any collision with one of the objects occurs
        - if so redirects the ball accordingly by setting ball.dx, ball.dy
        - paddle is the fist object to be in this list ;-)
    */

    newGame = () => {
        this.#clearContext()
        this.#initPaddle()
        this.#initBall()
        this.ball.draw(this.ctx)
        this.paddle.draw(this.ctx)
    }

    toggle = () => {
        if (this.running)
            this.stop()
        else
            this.start()
    }

    start = () => {
        this.running = true
        this.redrawInterval = setInterval(this.#redraw, 10)
    }

    stop = () => {
        this.running = false
        clearInterval(this.redrawInterval)
    }

    lost = () => {
        this.stop()
        toggleYouLose()
    }


    #clearContext = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    #redraw = () => {
        this.#clearContext()

        this.ball.draw(this.ctx)

        if (this.paddle.leftX() <= 0)
            this.paddle.x = 0 + this.paddle.width / 2
        if (this.paddle.rightX() >= this.canvas.width)
            this.paddle.x = this.canvas.width - this.paddle.width / 2
        this.paddle.draw(this.ctx)
        this.paddle.offset()

        if ((this.ball.x + this.ball.radius) >= this.canvas.width || (this.ball.x - this.ball.radius) <= 0)
            this.ball.dx *= -1
        if ((this.ball.y - this.ball.radius) <= 0)
            this.ball.dy *= -1
        this.ball.offset()

        this.paddle.bounce(this.ball)

        if (this.ball.y > this.paddle.bottomY()) {
            this.lost()
        }
    }

}
