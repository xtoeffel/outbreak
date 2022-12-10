let ball
let x_offset = 0.5
let y_offset = 0.3

const x_min = 0.0
// 100% - ball diameter in %
const x_max = 98.0
const y_min = 0.0
// 100% - ball diameter in %
const y_max = 98.0

moveBall = () => {
    if (ball == null)
        ball = document.getElementById('ball')

    if (ball.style.left == '' || ball.style.top == '') {
        ball.style.left = '5%'
        ball.style.top = '5%'
    }

    let left_value = Number(ball.style.left.replace('%', ''))
    let top_value = Number(ball.style.top.replace('%', ''))

    if (left_value >= x_max)
        x_offset = -x_offset
    else if (left_value <= x_min)
        x_offset = Math.abs(x_offset)

    if (top_value >= y_max)
        y_offset = -y_offset
    else if (top_value <= y_min)
        y_offset = Math.abs(y_offset)

    ball.style.left = (left_value + x_offset) + '%'
    ball.style.top = (top_value + y_offset) + '%'
}