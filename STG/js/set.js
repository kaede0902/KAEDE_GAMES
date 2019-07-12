const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const endX = canvas.width = window.innerWidth;
const endY = canvas.height = window.innerHeight;
const midX = endX/2;
const midY = endY/2;
c.lineWidth = 5;

const keyPress = {
    right: false,
    left: false,
};


let gameEnd = false;

