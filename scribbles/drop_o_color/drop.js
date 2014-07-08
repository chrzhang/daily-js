var body = null,
    inputBox = null;

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

function updateColors(counter) {
    body.style.backgroundColor = inputBox.value = makeColorStringOutta(counter);
}

function makeColorStringOutta(number) {
    return ('#' + ('00000'+ number.toString(16)).substr(-6));
}

function makeHexOutta(colorStr) {
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
            console.log('incrementing...');
            incrementColor();
            break;
        case 37: // Left
            console.log('decrementing...');
            decrementColor();
            break;
        case 40: // Down
            randomize();
            break;
    }
}

function randomize() {
    body.style.backgroundColor = inputBox.value = "#" + 
        ( (1 << 24) * Math.random() | 0).toString(16);
    counter = makeHexOutta(inputBox.value);
}

function updateOnUserIn() {
    body.style.backgroundColor = inputBox.value;
    counter = makeHexOutta(inputBox.value);
}