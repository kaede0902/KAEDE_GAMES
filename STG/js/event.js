const keyPress = {
    right: false, left: false,
    up: false, down: false,
    counter: 0,
};
const printKey = (e) => {
    console.log(`Pressed: ${e.keyCode}`);
    console.log(keyPress);
}
const judgeKeyNum = (e,num1,num2,num3) => {
    return (e.keyCode == num1 ||e.keyCode == num2|| e.keyCode == num3)
}
console.log(keyPress);
console.log('Right:(D,L),Left:(A,H)');

document.addEventListener('keydown',KeyDownHandler,false);
document.addEventListener('keyup',KeyUpHandler,false);

function KeyDownHandler(e) {
    if(judgeKeyNum(e,39,68,76)) {
        keyPress.right = true;
        // ->,D,L
    } else if(judgeKeyNum(e, 37,65,72)) {
        keyPress.left = true;
        // <-,A,H
    } else if(judgeKeyNum(e, 38,82,75,)) {
        keyPress.up = true;
        // ^,W,K,
    } else if(judgeKeyNum(e, 40,83,74,)) {
        keyPress.down = true;
        // DOWN,S,J
    }
    keyPress.counter++;
    printKey(e);
}
function KeyUpHandler(e) {
    if(judgeKeyNum(e,39,68,76)) {
        keyPress.right = false;
        // ->,D,L
    } else if(judgeKeyNum(e, 37,65,72)) {
        keyPress.left = false;
        // <-,A,H
    } else if(judgeKeyNum(e, 38,82,75,)) {
        keyPress.up = false;
        // ^,W,K,
    } else if(judgeKeyNum(e, 40,83,74,)) {
        keyPress.down = false;
        // DOWN,S,J
    }
    printKey(e);
}


