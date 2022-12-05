createTable = (rows, cols) => {
    let table = document.createElement("table")
    table.className = 'matrix'

    for (let row = 0; row < rows; row++) {
        tr = document.createElement('tr')
        table.appendChild(tr)
        for (let col = 0; col < cols; col++) {
            td = document.createElement('td')
            tr.appendChild(td)
        }
    }

    return table
}


createBricks = (brickMatrix, colorMatrix, brickWidth, brickHeight) => {

    if (!Array.isArray(brickMatrix))
        throw "bricks-matrix is not an array"
    if (!Array.isArray(colorMatrix))
        throw "color-matrix is not an array"
    if (brickMatrix.length == 0)
        throw "brick-matrix is empty"
    if (colorMatrix.length == 0)
        throw "color-matrix is empty"


    let rowsCount = brickMatrix.length
    if (rowsCount != colorMatrix.length)
        throw "brick-matrix and color-matrix have different number of rows"

    columnsCount = 0
    for (let row = 0; row < brickMatrix.length; row++) {
        if (!Array.isArray(brickMatrix[row]))
            throw "brick-matrix: row " + row + " is not an array"
        if (row === 0) {
            columnsCount = brickMatrix[row].length
            continue
        }
        if (brickMatrix[row].length != columnsCount)
            throw "brick-matrix: inconsistent number of columns in row " + row
    }
    for (let row = 0; row < colorMatrix.length; row++) {
        if (!Array.isArray(colorMatrix[row]))
            throw "color-matrix: row " + row + " is not an array"
        if (colorMatrix[row].length != columnsCount)
            throw "color-matrix: inconsistent number of columns in row " + row
    }

    let table = createTable(rowsCount, columnsCount)
    for (let row = 0; row < brickMatrix.length; row++) {
        let tableRows = table.getElementsByTagName('tr')
        let currentRow = tableRows[row]
        for (let col = 0; col < brickMatrix[0].length; col++) {
            if (brickMatrix[row][col]) {
                let tableColumns = currentRow.getElementsByTagName('td')
                let currentCell = tableColumns[col]
                let name = "brick_" + row + "_" + col
                let brick = createBrick(colorMatrix[row][col], brickWidth, brickHeight, name)
                currentCell.appendChild(brick)
            }
        }
    }
    return table
}


testCreateBricks = () => {
    const brickMatrix = [
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
        [0, 1, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
        [1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
        [0, 1, 0, 0, 0, 1, 0, 0, 1, 1],
        [0, 1, 1, 0, 0, 1, 0, 0, 1, 0],
        [0, 0, 1, 1, 0, 1, 0, 1, 1, 0],
        [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    ]
    const colorMatrix = [
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#cdcdcd', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#cdcdcd', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#cdcdcd', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#cdcdcd', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#cdcdcd', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#cdcdcd', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
        ['#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#5a7dc9', '#48ad68', '#48ad68', '#48ad68', '#48ad68', '#48ad68'],
    ]
    let table = createBricks(brickMatrix, colorMatrix, "4vmin", "2vmin")
    document.getElementById('bricksContainer').appendChild(table)
}
