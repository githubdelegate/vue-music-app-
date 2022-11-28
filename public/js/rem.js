function remSize() {
    var devW = document.documentElement.clientWidth || window.innerWidth
    if (devW >= 750) {
        devW = 750        
    }

    if (devW <= 320) {
        devW = 320
    }
    document.documentElement.style.fontSize = (devW / 7.5) + 'px'
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}

remSize()

window.onresize=function() {
    remSize()
}