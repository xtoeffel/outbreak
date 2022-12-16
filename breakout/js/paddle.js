class Paddle {
    constructor(width, height, fillColor, strokeColor) {
        this.width = width
        this.height = height
        this.fillColor = fillColor
        this.strokeColor = strokeColor

        this.x = 0
        this.y = 0
        this.stepWidth = 2
        this.dx = 0
        this.dy = 0

        this.bouncer = new BounceBox()
    }


    draw = (ctx) => {
        ctx.fillStyle = this.fillColor
        ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
        // TODO: outer stroke?
    }

    offset = () => {
        this.x += this.dx
        this.y += this.dy
    }

    leftX = () => {
        return this.x - this.width / 2
    }

    rightX = () => {
        return this.x + this.width / 2
    }

    topY = () => {
        return this.y - this.height / 2
    }

    bottomY = () => {
        return this.y + this.height / 2
    }

    bounce = (ball) => {
        return this.bouncer.bounce(ball, this.leftX(), this.topY(), this.rightX(), this.bottomY())
    }

}