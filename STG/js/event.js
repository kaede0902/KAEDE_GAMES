

const keyPress = {
    right: false,
    left: false,
    counter: 0,
};
const printKey = (e) => {
    console.log(`Pressed: ${e.keyCode}`);
    console.log(keyPress);
}
console.log(keyPress);
console.log('Right:(D,L),Left:(A,H)');

document.addEventListener('keydown',KeyDownHandler,false);
document.addEventListener('keydown',KeyUpHandler,false);

function KeyDownHandler(e) {
    if(
        e.keyCode == 39|| //->
        e.keyCode == 68|| // D
        e.keyCode == 76   // L
    ) { 
        keyPress.right = true;
        keyPress.counter++;
    } else if(
        e.keyCode == 37|| //<-
        e.keyCode == 65|| // A
        e.keyCode == 72// H
    ) {
        keyPress.left = true;
        keyPress.counter++;
    }
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


