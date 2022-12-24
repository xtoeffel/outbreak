class PowerItem {
    constructor(symbol, x, y, action) {
        this.size = 20
        this.radius = this.size / 4
        this.symbol = symbol

        this.action = action

        this.x = x
        this.y = y
        this.dx = 0
        this.dy = 2

        this.isAvailable = true
        this.isCurrentlyActive = false
    }

    apply = (game) => {
        if (this.action != null) {
            this.action(game, this)
            this.isAvailable = false
        }
    }

    offset = () => {
        this.x += this.dx
        this.y += this.dy
    }

    draw = (ctx) => {
        // ctx.beginPath()
        // ctx.fillStyle = this.fillColor
        // ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        // ctx.fill()
        // ctx.closePath()
        ctx.font = this.size + "px serif"
        ctx.textBaseLine = 'middle'
        ctx.textAlign = 'center'
        ctx.fillText(this.symbol, this.x, this.y + this.radius / 2)
    }

    velocity = () => {
        return Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2))
    }
}


const powerItemsTemplates = {
    'ICE': new PowerItem(
        "⛄", 0, 0,
        (g, item) => {
            g.paddle.isMoveable = false
            g.paddle.fillColor = "#961414"
            item.isCurrentlyActive = true
            setTimeout(() => {
                g.paddle.isMoveable = true
                g.paddle.fillColor = g.paddleColor
                item.isCurrentlyActive = false
            }, 600)
        }
    ),
    'SHRINK': new PowerItem(
        "🖕", 0, 0, (g) => { g.paddle.width -= 10 }
    ),
    'EXTEND': new PowerItem(
        "🖖", 0, 0, (g) => { g.paddle.width += 10 }
    ),
    'FUZZ': new PowerItem(
        "👻", 0, 0,
        (g, item) => {
            blurScreen(5)
            item.isCurrentlyActive = true
            setTimeout(() => {
                unBlurScreen()
                item.isCurrentlyActive = false
            }, 5000)
        },
        false, 5000
    ),
    'FAST': new PowerItem(
        "🐇", 0, 0,
        (g, item) => {
            game.ball.dx += game.ball.dx / Math.abs(game.ball.dx)
            game.ball.dy += game.ball.dy / Math.abs(game.ball.dy)
            item.isCurrentlyActive = true
            setTimeout(() => {
                game.ball.dx -= game.ball.dx / Math.abs(game.ball.dx)
                game.ball.dy -= game.ball.dy / Math.abs(game.ball.dy)
                item.isCurrentlyActive = false
            }, 5000)
        }
    ),
    'SLOW': new PowerItem(
        "🐌", 0, 0,
        (g, item) => {
            g.ball.dx -= g.ball.dx / Math.abs(g.ball.dx)
            g.ball.dy -= g.ball.dy / Math.abs(g.ball.dy)
            item.isCurrentlyActive = true
            setTimeout(() => {
                g.ball.dx += g.ball.dx / Math.abs(g.ball.dx)
                g.ball.dy += g.ball.dy / Math.abs(g.ball.dy)
                item.isCurrentlyActive = false
            }, 5000)
        }
    ),
    'GLASS': new PowerItem(
        "👀", 0, 0,
        (g, item) => {
            g.paddle.fillColor = '#7e7e7e35'
            item.isCurrentlyActive = true
            setTimeout(() => {
                g.paddle.fillColor = g.paddleColor
                item.isCurrentlyActive = false
            }, 5000)
        }
    ),
    // TODO: implement crazy bounce
    'CRAZY_BOUNCE': new PowerItem(
        '🌀', 0, 0,
        (g, item) => {
            currentBouncerPaddle = g.paddle.bouncer
            g.paddle.bouncer = new BounceBoxCrazy()
            item.isCurrentlyActive = true
            setTimeout(() => {
                g.paddle.bouncer = currentBouncerPaddle
                item.isCurrentlyActive = false
            }, 10000)
        }
    ),
    'DEAD': new PowerItem('💀', 0, 0, (g, item) => { g.lost() }),
    'POOP': new PowerItem(
        '💩', 0, 0,
        (g, item) => {
            item.isCurrentlyActive = true
            g.totalPoints += Math.round(20 + 80 * Math.random())
            setTimeout(() => { item.isCurrentlyActive = false }, 10000)
        }
    ),
}

getNewPowerItem = (itemName) => {
    var dropTemplate = powerItemsTemplates[itemName]
    return new PowerItem(
        dropTemplate.symbol,
        dropTemplate.x, dropTemplate.y,
        dropTemplate.action,
        dropTemplate.isPermanent, dropTemplate.period
    )
}