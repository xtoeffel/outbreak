
blurScreen = (blurLevel) => {
    container = document.getElementById('container')
    container.style.filter = 'blur(' + blurLevel + 'px)'
}

unBlurScreen = () => {
    container = document.getElementById('container')
    container.style.filter = ''
}

toggleVisibility = (divName) => {
    div = document.getElementById(divName)
    if (div.style.visibility == '' || div.style.visibility === 'hidden') {
        div.style.visibility = 'visible';
        blurScreen(10)
    }
    else {
        div.style.visibility = 'hidden';
        unBlurScreen()
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



