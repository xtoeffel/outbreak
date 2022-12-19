class Brick {
    constructor(x, y, width, height, fillColor, strokeColor, points = 10) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.fillColor = fillColor
        this.strokeColor = strokeColor

        this.destroyed = false
        this.bouncer = new BounceBox()
        // this.bouncer = new BouncePath()
        this.points = points
    }

    draw = (ctx) => {
        ctx.fillStyle = this.fillColor
        ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)
        // TODO: outer stroke?
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
        // var outLines = [
        //     new Line(new Point(this.leftX(), this.topY()), new Point(this.rightX(), this.topY())),
        //     new Line(new Point(this.leftX(), this.topY()), new Point(this.leftX(), this.bottomY())),
        //     new Line(new Point(this.rightX(), this.topY()), new Point(this.rightX(), this.bottomY())),
        //     new Line(new Point(this.leftX(), this.bottomY()), new Point(this.rightX(), this.bottomY())),
        // ]
        // return this.bouncer.bounce(ball, outLines)
    }
}

