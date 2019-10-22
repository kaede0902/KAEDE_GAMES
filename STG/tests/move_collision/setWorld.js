const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

const world = {
    left : 0,
    right: cvs.width = window.innerWidth,
    top: 0,
    bottom: cvs.height = window.innerHeight,
    center : {
        x: cvs.width/2,
        y: cvs.height/2,
    },
};
console.log(JSON.stringify(world));
ctx.lineWidth = 5;

let gameEnd = false;
let tick = 0;
   
