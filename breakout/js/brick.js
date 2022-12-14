class Brick {
    constructor(x, y, width, height, fillColor, strokeColor, points = 10) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.powerItem = null
        this.frameWidth = 5

        this.fillColor = fillColor
        this.strokeColor = strokeColor
        this.edgeColorTop = '#ffffff45'
        this.edgeColorBot = '#00000045'
        this.shadowColor = '#8d8d8d'
        this.shadowOffsetX = 3
        this.shadowOffsetY = 3
        this.shadowBlur = 5

        this.destroyed = false
        this.bouncer = new BounceBox()
        this.points = points
    }

    draw = (ctx) => {
        ctx.fillStyle = this.fillColor
        ctx.shadowColor = this.shadowColor
        ctx.shadowOffsetX = this.shadowOffsetX
        ctx.shadowOffsetY = this.shadowOffsetY
        ctx.shadowBlur = this.shadowBlur
        ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height)

        ctx.shadowColor = ''
        ctx.shadowOffsetX = 0
        ctx.shadowOffsetY = 0

        ctx.beginPath()
        ctx.strokeColor = '#000000'
        ctx.fillStyle = this.edgeColorTop
        ctx.moveTo(this.x - this.width / 2, this.y - this.height / 2)
        ctx.lineTo(this.x - this.width / 2, this.y + this.height / 2)
        ctx.lineTo(this.x - this.width / 2 + this.frameWidth, this.y + this.height / 2 - this.frameWidth)
        ctx.lineTo(this.x - this.width / 2 + this.frameWidth, this.y - this.height / 2 + this.frameWidth)
        ctx.lineTo(this.x + this.width / 2 - this.frameWidth, this.y - this.height / 2 + this.frameWidth)
        ctx.lineTo(this.x + this.width / 2, this.y - this.height / 2)
        ctx.closePath()
        ctx.fill()

        ctx.beginPath()
        ctx.strokeColor = '#ffffff'
        ctx.fillStyle = this.edgeColorBot
        ctx.moveTo(this.x - this.width / 2, this.y + this.height / 2)
        ctx.lineTo(this.x - this.width / 2 + this.frameWidth, this.y + this.height / 2 - this.frameWidth)
        ctx.lineTo(this.x + this.width / 2 - this.frameWidth, this.y + this.height / 2 - this.frameWidth)
        ctx.lineTo(this.x + this.width / 2 - this.frameWidth, this.y - this.height / 2 + this.frameWidth)
        ctx.lineTo(this.x + this.width / 2, this.y - this.height / 2)
        ctx.lineTo(this.x + this.width / 2, this.y + this.height / 2)
        ctx.closePath()
        ctx.fill()

        // need to reset fillStyle to full opacity color (any will do)
        // otherwise power items will have the brick overlay fillStyle
        ctx.fillStyle = '#ffffff'
        ctx.shadowBlur = 0
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

