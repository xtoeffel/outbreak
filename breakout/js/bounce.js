
class BounceBox {

    constructor() { }

    bounce = (ball, leftX, topY, rightX, bottomY) => {
        if (ball.x >= leftX && ball.x <= rightX) {
            // ball in vertical projection of paddle
            if (ball.dy > 0) {
                // ball moves top down
                if ((ball.y + ball.radius) == topY) {
                    ball.dy *= -1
                    return true
                }
            }
            else if (ball.dy < 0) {
                // ball moves bottom up
                if ((ball.y - ball.radius) == bottomY) {
                    ball.dy *= -1
                    return true
                }

            }
            else
                throw "ball isn't moving vertically"
        }
        else if (ball.y >= topY && ball.y <= bottomY) {
            // ball in horizontal projection of paddle
            if (ball.dx > 0) {
                // ball moves left right
                if ((ball.x + ball.radius) == leftX) {
                    ball.dx *= -1
                    return true
                }
            }
            else if (ball.dx < 0) {
                // ball moves right left
                if ((ball.x - ball.radius) == rightX) {
                    ball.dx *= -1
                    return true
                }
            }
            else
                throw "ball isn't moving horizontally"
        }
    }
}


class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}


class Line {
    constructor(p1, p2) {
        this.p1 = new Point(Math.min(p1.x, p2.x), Math.min(p1.y, p2.y))
        this.p2 = new Point(Math.max(p1.x, p2.x), Math.max(p1.y, p2.y))
    }
}


class BouncePath {
    constructor(lines) {
        this.lines = lines
    }

    #intersect = (ball, line) => {
        // check if ball and line intersect
        // if so return the point of intersection
        if (ball.x + ball.radius < line.p1.x || ball.x - ball.radius > p2.x)
            return null
        if (ball.y + ball.radius < line.p1.y || ball.y - ball.radius > p2.y)
            return null

    }

    bounce = (ball) => {
        // loop over all lines
        // intersect with ball
        // if there's an intersection
        // it should be bouncing :)
    }
}

