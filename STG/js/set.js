const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const endX = canvas.width = window.innerWidth;
const endY = canvas.height = window.innerHeight;
const midX = endX/2;
const midY = endY/2;
ctx.lineWidth = 5;

const keyPress = {
    right: false,
    left: false,
};


let gameEnd = false;


document.addEventListener("keydown", KeyDownHandler, false);
document.addEventListener("keyup", KeyUpHandler, false);

function KeyDownHandler(e) {
    if(e.keyCode == 39||e.keyCode == 68) { 
        keyPress.right = true;
    } else if(e.keyCode == 37||e.keyCode == 63) {
        keyPress.left = true;
    }
}
function KeyUpHandler(e) {
    if(e.keyCode == 39||e.keyCode == 68) { 
        keyPress.right = false;
    } else if(e.keyCode == 37||e.keyCode == 63) {
        keyPress.left = false;
    }
}   
