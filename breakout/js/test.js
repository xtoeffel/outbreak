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


function assertTrue(actual, message = '') {
    if (!actual) {
        throw 'not true ' + message
    }
}


function assertFalse(actual, message = '') {
    if (actual) {
        throw 'not false ' + message
    }
}


function runAllTests() {
    testFunctions = [
        testDist,
        testBoxIsWithin
    ]

    testFunctions.forEach(element => {
        try {
            element()
            console.log('SUCCESS <- ' + element.name)
        }
        catch (error) {
            console.error('FAIL <- ' + element.name)
            console.error(error)
        }
    });
}


function testDist() {
    p1 = new Point(10, 20)
    p2 = new Point(10, 30)
    p3 = new Point(12, -10)
    p4 = new Point(90, 20)
    actual1 = dist(p1, p2)
    actual2 = dist(p2, p3)
    actual3 = dist(p3, p1)
    actual4 = dist(p1, p3)
    actual5 = dist(p1, p4)
    assertEqual(10, actual1)
    assertEqual(Math.sqrt(1604), actual2)
    assertEqual(Math.sqrt(904), actual3)
    assertEqual(actual3, actual4)
    assertEqual(80, actual5)
}


function testBoxIsWithin() {
    box = new Box(-2, -2, 2, 2)
    assertTrue(box.isCoordsWithin(0, 0))
    assertTrue(box.isPointWithin(new Point(0, 0)))
    assertTrue(box.isCoordsWithin(2, 2))
    assertTrue(box.isPointWithin(new Point(-2, 2)))
    assertFalse(box.isPointWithin(new Point(-5, 5)))
    assertFalse(box.isPointWithin(new Point(5, 5)))
}
