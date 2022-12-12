var game

init = () => {
    game = new Game()
    game.newGame()
}

/*
TODO:
- counter for points
- brick blow up animation
- improve brick-bouncing
- add special bricks that drop power-ups ... or other shit, like crazy bounce
- show points in status bar, show power-ups or power-downs
- add points to brick; use 3rd matrix, add some color change for points
- show level in statusbar
*/
class Game {
    constructor() {
        var ballColor = '#000000'
        var paddleColor = '#282828'
        // TODO: remove strokes?
        var ballStroke = '#e4e4e4'
        var paddleStroke = '#e4e4e4'

        this.canvas = document.getElementById('game')
        this.ctx = this.canvas.getContext('2d')

        this.ball = new Ball(10, ballColor, ballStroke)
        this.paddle = new Paddle(60, 15, paddleColor, paddleStroke)

        this.redrawInterval = null
        this.running = false

        this.bricks = []
        this.objects = []
        this.totalPoints = 0
    }

    #initPaddle = () => {
        this.paddle.stepWidth = 6
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

    newGame = () => {
        this.bricks = level2()
        updateLevel('Level 2')
        this.totalPoints = 0
        updatePoints(this.totalPoints)

        this.#clearContext()
        this.#initPaddle()
        this.#initBall()
        this.ball.draw(this.ctx)
        this.paddle.draw(this.ctx)
        this.bricks.forEach((b) => b.draw(this.ctx))

        this.objects = [this.paddle].concat(this.bricks)
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

        this.bricks.forEach((brick) => { if (!brick.destroyed) { brick.draw(this.ctx) } })
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

        this.bricks.forEach((brick) => {
            if (!brick.destroyed) {
                let bounced = brick.bounce(this.ball)
                if (bounced) {
                    brick.destroyed = true
                    this.totalPoints += brick.points
                    updatePoints(this.totalPoints)
                }
            }
        })

        if (this.ball.y - this.ball.radius - 5 > this.canvas.height) {
            this.lost()
        }
    }

}
