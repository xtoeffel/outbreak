createBrick = (color, width, height, name) => {
    brick = document.createElement('div')
    if (name != "")
        brick.id = name
    brick.className = "brick"

    // get color a bit darker and set it to
    // border (as shadow)
    // set background as color
    brick.style.backgroundColor = color
    brick.style.width = width
    brick.style.height = height

    return brick
}

