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

    /*
    Bounce the ball of the paddle.
    */
    bounce = (ball) => {
        // if (ball.x + ball.radius >= this.leftX() && ball.x - ball.radius <= this.rightX()
        //     && ball.y + ball.radius >= this.topY() && ball.y - ball.radius <= this.bottomY()
        // ) {
        //     // ball is touching paddle

        // }

        // 3 vertical ranges
        // center projections of paddle: normal bounce
        // left 'nearby area': deflected bounce
        // right 'nearby area': deflected bounce
        if (ball.x >= this.leftX() && ball.x <= this.rightX()) {
            // ball in vertical projection of paddle
            if (ball.dy > 0) {
                // ball moves top down
                if ((ball.y + ball.radius) == this.topY())
                    ball.dy *= -1
            }
            else if (ball.dy < 0) {
                // ball moves bottom up
                if ((ball.y - ball.radius) == this.bottomY())
                    ball.dy *= -1
            }
            else
                throw "ball isn't moving vertically"
        }
        else if (ball.y >= this.topY() && ball.y <= this.bottomY()) {
            // ball in horizontal projection of paddle
            if (ball.dx > 0) {
                // ball moves left right
                if ((ball.x + ball.radius) == this.leftX())
                    ball.dx *= -1
            }
            else if (ball.dx < 0) {
                // ball moves right left
                if ((ball.x - ball.radius) == this.rightX())
                    ball.dx *= -1
            }
            else
                throw "ball isn't moving horizontally"
        }
        else if (ball.x + radius >= this.leftX()) {
            // left side nearby area

        }

    }

}