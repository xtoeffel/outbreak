function assert(statement, message = '') {
    if (!statement) {
        throw message
    }
}

function assertEqual(expected, actual, message = '') {
    if (expected != actual) {
        throw expected + ' != ' + actual + ' ' + message
    }
}


function runAllTests() {
    testFunctions = [
        testIntersectHorizontalContact,
        testIntersectDiagonal,
        testIntersectHorizontal,
        testIntersectionVertical,
        testIntersectVerticalContact

    ]

    // TODO: show a summary
    testFunctions.forEach(element => {
        try {
            console.log('running ' + element.name)
            element()
            console.log('   ' + element.name + '... SUCCESS')
        }
        catch (error) {
            console.error('   ' + error)
            console.error('   ' + element.name + '... FAIL')
        }
    });
}

// TODO: implement more test cases
// TODO: add edge cases
function testIntersectHorizontalContact() {
    ball = new Ball(10, '', '')
    ball.x = 400
    ball.y = 976
    line = new Line(new Point(400 - 30, 994 - 8), new Point(400 + 30, 994 - 8))
    actual = intersect(ball, line)
    assertEqual(400, actual.x)
    assertEqual(986, actual.y)
}

function testIntersectDiagonal() {
    ball = new Ball(84, '', '')
    ball.x = 0
    ball.y = 0
    line = new Line(new Point(-100, 136), new Point(100, -64))
    actual = intersect(ball, line)
    assertEqual(18, actual.x)
    assertEqual(18, actual.y)
}

function testIntersectHorizontal() {
    ball = new Ball(45, '', '')
    ball.x = 14
    ball.y = 0
    line = new Line(new Point(-100, -36), new Point(100, -36))
    actual = intersect(ball, line)
    assertEqual(14, actual.x)
    assertEqual(-36, actual.y)
}

function testIntersectionVertical() {
    ball = new Ball(50, '', '')
    ball.x = 10
    ball.y = 10
    line = new Line(new Point(-36, -100), new Point(-36, 100))
    actual = intersect(ball, line)
    assertEqual(-36, actual.x)
    assertEqual(10, actual.y)
}

function testIntersectVerticalContact() {
    ball = new Ball(50, '', '')
    ball.x = 14
    ball.y = 3
    line = new Line(new Point(-36, 100), new Point(-36, -100))
    actual = intersect(ball, line)
    assertEqual(-36, actual.x)
    assertEqual(3, actual.y)
}