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
    } else if(
        judgeKeyNum(e,37,65,72)
        // <-,A,H
    ) {
        keyPress.left = true;
    } else if(
        e.keyCode == 38|| // ^
        e.keyCode == 82|| // w
        e.keyCode == 75   // k
    ) {
        keyPress.up = true;
    } else if(
        e.keyCode == 40|| // !^
        e.keyCode == 83|| // s
        e.keyCode == 74   // j
    ) {
        keyPress.down = true;
    }


    keyPress.counter++;
    printKey(e);
}
function KeyUpHandler(e) {
    if(
        e.keyCode == 39|| //->
        e.keyCode == 68|| // D
        e.keyCode == 76   // L
    ) { 
        keyPress.right = false;
    } else if(
        e.keyCode == 37|| //<-
        e.keyCode == 65|| // A
        e.keyCode == 72// H
    ) {
        keyPress.left = false;
    }
    printKey(e);
}


