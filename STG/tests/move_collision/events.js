const keyPress = {
    left: false,right: false, 
    up: false, down: false,
    counter: 0,
};
const operateKeys = {
    left: [37, 65, 72,],
    right: [39, 68, 76,],
    up: [38, 87, 75,],
    down: [40, 83, 74,],
};

const KeyDownHandler = e => {
    if (operateKeys.left.includes(e.keyCode))
        keyPress.left = true;
    if (operateKeys.right.includes(e.keyCode))
        keyPress.right = true;
    if (operateKeys.up.includes(e.keyCode))
        keyPress.up = true;
    if (operateKeys.down.includes(e.keyCode))
        keyPress.down = true;
}
document.addEventListener(
    'keydown',KeyDownHandler,false);

function KeyUpHandler(e) {
    if (operateKeys.left.includes(e.keyCode))
        keyPress.left = false;
    if (operateKeys.right.includes(e.keyCode))
        keyPress.right = false;
    if (operateKeys.up.includes(e.keyCode))
        keyPress.up = false;
    if (operateKeys.down.includes(e.keyCode))
        keyPress.down = false;
}
document.addEventListener(
    'keyup',KeyUpHandler,false);
