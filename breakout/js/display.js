toggleYouLose = () => {
    container = document.getElementById('container')
    youLoseDiv = document.getElementById('youLose')
    if (youLoseDiv.style.visibility == '' || youLoseDiv.style.visibility === 'hidden') {
        youLoseDiv.style.visibility = 'visible';
        container.style.filter = 'blur(10px)'
    }
    else {
        youLoseDiv.style.visibility = 'hidden';
        container.style.filter = ''
    }
}


updatePoints = (points) => {
    document.getElementById("points").innerHTML = points
}

updateLevel = (level) => {
    document.getElementById('level').innerHTML = level
}

