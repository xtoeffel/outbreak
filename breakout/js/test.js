function assert(statement, message = '') {
    if (!statement) {
        throw message
    }
}

function runAllTests() {
    testFunctions = [
        testIntersect1,
        testIntersect2,
        testIntersect3,
        testIntersect4

    ]

    // TODO: show a summary
    testFunctions.forEach(element => {
        try {
            console.log('running ' + element.name)
            element()
            console.log('   ' + element.name + '... SUCCESS')
        }
        catch {
            console.log('   ' + element.name + '... FAIL')
        }
    });
}

// TODO: implement more test cases
// TODO: add edge cases
function testIntersect1() {
    ball = new Ball(10, '', '')
    ball.x = 400
    ball.y = 976
    line = new Line(new Point(400 - 30, 994 - 8), new Point(400 + 30, 994 - 8))
    actual = intersect(ball, line)
    assert(actual.x === 400)
    assert(actual.y === 986)
}

function testIntersect2() {

}

function testIntersect3() {

}

function testIntersect4() {

}