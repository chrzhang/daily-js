var body = null,
    inputBox = null,
    colorHistory = [];

var counter = 0;

window.onload = function() {
    body = document.querySelector('BODY');
    inputBox = document.querySelector('#inRGB');
    body.onkeydown = rapidChangeColors;
    if (body.addEventListener) {
        // IE9, Chrome, Safari, Opera
        body.addEventListener("mousewheel", MouseWheelHandler, false);
        // Firefox
        body.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
    }
    // IE 6/7/8
    else {
        body.attachEvent("onmousewheel", MouseWheelHandler);
    }
}

function MouseWheelHandler(e) {
    var e = window.event || e; // old IE support
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    addToCounter(delta);
    updateColors(counter);
    return false;
}

function addToCounter(amount) {
    counter += amount;
    counter = Math.min(Math.max(parseInt(counter), 0), 0xFFFFFF);
}

function updateColors(counter, restoreOld) {
    body.classList.add('changeCol');
    body.style.backgroundColor = inputBox.value = makeColorStringOutta(counter);
    if (!restoreOld)
        colorHistory.push(counter);
}

function makeColorStringOutta(number) {
    return ('#' + ('00000'+ number.toString(16)).substr(-6));
}

function makeHexOutta(colorStr) {
    if (colorStr.length !== 7) return;
    return parseInt('0x' + colorStr.substr(1));
}

// For arrow key events

function incrementColor() {
    addToCounter(1000);
    updateColors(counter);
}

function decrementColor() {
    addToCounter(-1000);
    updateColors(counter);
}

function rapidChangeColors(e) {
    e = e || window.event;
    switch (e.keyCode) {
        case 39: // Right
            incrementColor();
            break;
        case 37: // Left
            decrementColor();
            break;
        case 40: // Down
            randomize();
            break;
        case 38: // Up
            restoreLastColor();
            break;
    }
}

function randomize() {
    var someRandomColorStr = "#" + 
        ('00000' + ((1 << 24) * Math.random() | 0).toString(16)).substr(-6);
    counter = makeHexOutta(someRandomColorStr);
    updateColors(counter);
}

function updateOnUserIn() {
    counter = makeHexOutta(inputBox.value);
    updateColors(counter);
}

function restoreLastColor() {
    colorHistory.pop();
    if (colorHistory.length === 0) {
        return;
    } else {
        updateColors(colorHistory[colorHistory.length - 1], true);
    }
}