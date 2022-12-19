
class Ball {
    constructor(radius, fillColor = 'white', strokeColor = 'black') {
        this.radius = radius
        this.fillColor = fillColor
        this.strokeColor = strokeColor
        this.x = 0 + radius
        this.y = 0 + radius
        this.dx = 2
        this.dy = 2
    }

    setCenter = (x, y) => {
        this.x = x
        this.y = y
    }

    offset = () => {
        this.x += this.dx
        this.y += this.dy
    }

    draw = (ctx) => {
        ctx.beginPath()
        ctx.fillStyle = this.fillColor
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
        // ctx.strokeStyle = this.strokeColor
        // ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        // ctx.stroke();
        ctx.closePath()
    }

    velocity = () => {
        return Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2))
    }
}
