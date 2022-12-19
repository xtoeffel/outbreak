toggleVisibility = (divName) => {
    container = document.getElementById('container')
    div = document.getElementById(divName)
    if (div.style.visibility == '' || div.style.visibility === 'hidden') {
        div.style.visibility = 'visible';
        container.style.filter = 'blur(10px)'
    }
    else {
        div.style.visibility = 'hidden';
        container.style.filter = ''
    }
}

toggleYouLose = () => {
    toggleVisibility('youLose')
}

toggleLevelComplete = () => {
    toggleVisibility('levelComplete')
}

toggleYouWin = () => {
    toggleVisibility('youWin')
}


updatePoints = (points) => {
    document.getElementById("points").innerHTML = points
}

updateLevel = (level) => {
    document.getElementById('level').innerHTML = level
}



