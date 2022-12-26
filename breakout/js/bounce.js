
class BounceBox {

    constructor(dBox = 0) {
        this.dBox = dBox
    }

    // TODO: fix weird stick bounce on paddle
    bounce = (ball, leftX, topY, rightX, bottomY, dx = 0) => {
        let outerBox = new Box(
            leftX - ball.radius - this.dBox, topY - ball.radius - this.dBox,
            rightX + ball.radius + this.dBox, bottomY + ball.radius + this.dBox
        )
        if (!outerBox.isCoordsWithin(ball.x, ball.y)) {
            return false
        }

        let leftSideBox = new Box(
            leftX - ball.radius - this.dBox, topY - ball.radius / 2,
            leftX, bottomY + ball.radius / 2
        )
        let rightSideBox = new Box(
            rightX, topY - ball.radius / 2,
            rightX + ball.radius + this.dBox, bottomY + ball.radius / 2
        )

        let topBox = new Box(
            leftX - ball.radius / 2, topY - ball.radius - this.dBox,
            rightX + ball.radius / 2, topY
        )
        let botBox = new Box(
            leftX - ball.radius / 2, bottomY,
            rightX + ball.radius / 2, bottomY + ball.radius + this.dBox
        )
        // compute new ball.dx by adding the speed of the counter-movement
        // that's usually the paddle moving with or against the ball horizontally
        // first speeds ball up, second slows it down, no paddle move -> no effect
        let dxBall = Math.round(ball.dx + dx / Math.abs(ball.dx))
        // preserve the direction of ball in y-coords
        let dyBallDir = ball.dy / Math.abs(ball.dy)
        let dyBall = dyBallDir * Math.round(Math.sqrt(Math.pow(ball.velocity(), 2) - Math.pow(dxBall, 2)))

        if (leftSideBox.isCoordsWithin(ball.x, ball.y)
            || rightSideBox.isCoordsWithin(ball.x, ball.y)) {
            ball.dx *= -1
            return true
        }
        if (topBox.isCoordsWithin(ball.x, ball.y)
            || botBox.isCoordsWithin(ball.x, ball.y)) {
            ball.dx = dxBall
            ball.dy = dyBall
            ball.dy *= -1
            return true
        }

        return false
    }
}


class BounceBoxWithEdges {

    constructor(dBox = 0) {
        this.dBox = dBox
    }

    // TODO: fix weird edge to center stick bounce on paddle
    // TODO: does small overlap of bound boxes cause weird ball moves?
    bounce = (ball, leftX, topY, rightX, bottomY, dx = 0) => {
        const dW = 0

        let outerBoundBox = new Box(
            leftX - ball.radius - dW, topY - ball.radius - dW,
            rightX + ball.radius + dW, bottomY + ball.radius + dW
        )
        let leftSideBoundBox = new Box(leftX - ball.radius - dW, topY, leftX, bottomY)
        let rightSideBoundBox = new Box(rightX, topY, rightX + ball.radius + dW, bottomY)

        let topBoundBox = new Box(leftX, topY - ball.radius - dW, rightX, topY)
        let botBoundBox = new Box(leftX, bottomY, rightX, bottomY + ball.radius + dW)

        let topLeftEdgeBox = new Box(leftX - ball.radius - dW, topY - ball.radius - dW, leftX, topY)
        let topRightEdgeBox = new Box(rightX, topY - ball.radius - dW, rightX + ball.radius + dW, topY)
        let botLeftEdgeBox = new Box(leftX - ball.radius - dW, bottomY, leftX, bottomY + ball.radius + dW)
        let botRightEdgeBox = new Box(rightX, bottomY, rightX + ball.radius + dW, bottomY + ball.radius + dW)


        if (!outerBoundBox.isCoordsWithin(ball.x, ball.y)) {
            return false
        }

        // compute new ball.dx by adding the speed of the counter-movement
        // that's usually the paddle moving with or against the ball horizontally
        // first speeds ball up, second slows it down, no paddle move -> no effect
        let dxBall = Math.round(ball.dx + dx / Math.abs(ball.dx))
        // preserve the direction of ball in y-coords
        let dyBallDir = ball.dy / Math.abs(ball.dy)
        let dyBall = dyBallDir * Math.round(Math.sqrt(Math.pow(ball.velocity(), 2) - Math.pow(dxBall, 2)))

        if (leftSideBoundBox.isCoordsWithin(ball.x, ball.y)
            || rightSideBoundBox.isCoordsWithin(ball.x, ball.y)) {
            ball.dx *= -1
            return true
        }
        if (topBoundBox.isCoordsWithin(ball.x, ball.y)
            || botBoundBox.isCoordsWithin(ball.x, ball.y)) {
            ball.dx = dxBall
            ball.dy = dyBall
            ball.dy *= -1
            return true
        }

        if (topLeftEdgeBox.isCoordsWithin(ball.x, ball.y)) {
            if (ball.dx < 0 && ball.dy > 0) {
                ball.dx = dxBall
                ball.dy = dyBall
                ball.dy *= -1
            }
            else if (ball.dx > 0 && ball.dy < 0) {
                ball.dx *= -1
            }
            else {
                ball.dx = dxBall
                ball.dy = dyBall
                ball.dx *= -1
                ball.dy *= -1
            }
            return true
        }
        if (topRightEdgeBox.isCoordsWithin(ball.x, ball.y)) {
            if (ball.dx > 0 && ball.dy > 0) {
                ball.dx = dxBall
                ball.dy = dyBall
                ball.dy *= -1
            }
            else if (ball.dx < 0 && ball.dy < 0) {
                ball.dx *= -1
            }
            else {
                ball.dx = dxBall
                ball.dy = dyBall
                ball.dx *= -1
                ball.dy *= -1
            }
            return true
        }
        if (botLeftEdgeBox.isCoordsWithin(ball.x, ball.y)) {
            if (ball.dx > 0 && ball.dy > 0) {
                ball.dx *= -1
            }
            else if (ball.dx < 0 && ball.dy < 0) {
                ball.dx = dxBall
                ball.dy = dyBall
                ball.dy *= -1
            }
            else {
                ball.dx = dxBall
                ball.dy = dyBall
                ball.dx *= -1
                ball.dy *= -1
            }
            return true
        }
        if (botRightEdgeBox.isCoordsWithin(ball.x, ball.y)) {
            if (ball.dx < 0 && ball.dy > 0) {
                ball.dx *= -1
            } else if (ball.dx > 0 && ball.dy < 0) {
                ball.dx = dxBall
                ball.dy = dyBall
                ball.dy *= -1
            } else {
                ball.dx = dxBall
                ball.dy = dyBall
                ball.dx *= -1
                ball.dy *= -1
            }
            return true
        }

        return false
    }
}


class BounceBoxCrazy {

    constructor(dBox = 0) {
        this.dBox = dBox
    }

    bounce = (ball, leftX, topY, rightX, bottomY, dx = 0) => {
        let outerBox = new Box(
            leftX - ball.radius - this.dBox, topY - ball.radius - this.dBox,
            rightX + ball.radius + this.dBox, bottomY + ball.radius + this.dBox
        )
        if (!outerBox.isCoordsWithin(ball.x, ball.y)) {
            return false
        }

        let leftSideBox = new Box(
            leftX - ball.radius - this.dBox, topY - ball.radius / 2,
            leftX, bottomY + ball.radius / 2
        )
        let rightSideBox = new Box(
            rightX, topY - ball.radius / 2,
            rightX + ball.radius + this.dBox, bottomY + ball.radius / 2
        )

        let topBox = new Box(
            leftX - ball.radius / 2, topY - ball.radius - this.dBox,
            rightX + ball.radius / 2, topY
        )
        let botBox = new Box(
            leftX - ball.radius / 2, bottomY,
            rightX + ball.radius / 2, bottomY + ball.radius + this.dBox
        )
        // compute new ball.dx by adding the speed of the counter-movement
        // that's usually the paddle moving with or against the ball horizontally
        // first speeds ball up, second slows it down, no paddle move -> no effect
        let dxBall = Math.round(ball.dx + dx / Math.abs(ball.dx))
        // preserve the direction of ball in y-coords
        let dyBallDir = ball.dy / Math.abs(ball.dy)
        let dyBall = dyBallDir * Math.round(Math.sqrt(Math.pow(ball.velocity(), 2) - Math.pow(dxBall, 2)))

        let dir = Math.random() > 0.5 ? 1 : -1
        if (leftSideBox.isCoordsWithin(ball.x, ball.y)
            || rightSideBox.isCoordsWithin(ball.x, ball.y)) {
            ball.dx *= -1
            ball.dy *= dir
            return true
        }
        if (topBox.isCoordsWithin(ball.x, ball.y)
            || botBox.isCoordsWithin(ball.x, ball.y)) {
            ball.dx = dxBall
            ball.dy = dyBall
            ball.dy *= -1
            ball.dx *= dir
            return true
        }

        return false
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
        this.p1 = p1
        this.p2 = p2
    }
}


class Box {
    constructor(leftX, topY, rightX, bottomY) {
        this.leftX = leftX
        this.topY = topY
        this.rightX = rightX
        this.bottomY = bottomY
    }

    isPointWithin = (point) => {
        return this.isCoordsWithin(point.x, point.y)
    }

    isCoordsWithin = (x, y) => {
        return (x >= this.leftX && x <= this.rightX && y >= this.topY && y <= this.bottomY)
    }
}


/**
 * Computes distance between two points.
 * 
 * @param {Point} p1 first point
 * @param {Point} p2 second point
 */
function dist(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2))
}
