
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


// TODO: remove logs
intersect = (ball, line) => {
    dy = line.p2.y - line.p1.y
    dx = line.p2.x - line.p1.x
    a = - dy / dx
    b = 1
    c = -line.p1.y + dy / dx * line.p1.x
    m = - a / b
    n = - c / b

    // console.log('dy: ' + dy)
    // console.log('dx: ' + dx)
    // console.log('a: ' + a)
    // console.log('b: ' + b)
    // console.log('c: ' + c)
    // console.log('m: ' + m)
    // console.log('n: ' + n)


    if (dx == 0) {
        // console.log('vertical line')
        B = -2 * ball.y
        C = Math.pow(ball.x, 2) + Math.pow(ball.y, 2) + 2 * c / a * ball.x
        C += Math.pow(c, 2) / Math.pow(a, 2) - Math.pow(ball.radius, 2)
        D = Math.pow(B, 2) - 4 * C

        // console.log('D: ' + D)
        if (D < 0) {
            return null
        }
        else {
            x_p = line.p1.x
            y_p1 = (-B - Math.sqrt(Math.pow(B, 2) - 4 * C)) / 2
            y_p2 = (-B + Math.sqrt(Math.pow(B, 2) - 4 * C)) / 2
            y_p = (y_p1 + y_p2) / 2
        }
    }
    else {
        // console.log('not vertical line')
        A = Math.pow(a, 2) / Math.pow(b, 2) + 1
        B = 2 * (a * c / Math.pow(b, 2) - ball.x + a / b * ball.y)
        C = Math.pow(ball.x, 2) + Math.pow(ball.y, 2) + 2 * c / b * ball.y
        C += Math.pow(c, 2) / Math.pow(b, 2) - Math.pow(ball.radius, 2)
        D = Math.pow(B, 2) - 4 * A * C

        // console.log('D: ' + D)
        if (D < 0) {
            return null
        }
        else {
            x_p1 = (-B - Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A)
            x_p2 = (-B + Math.sqrt(Math.pow(B, 2) - 4 * A * C)) / (2 * A)
            x_p = (x_p1 + x_p2) / 2
            y_p = x_p * m + n
        }
    }

    // console.log('x_p1: ' + x_p1)
    // console.log('x_p2: ' + x_p2)
    // console.log('x_p: ' + x_p)
    // console.log('y_p: ' + y_p)

    return new Point(x_p, y_p)
}

