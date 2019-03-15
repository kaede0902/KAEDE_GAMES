src = 'set.js';
src = 'mob.js';

console.log(
);

function drawArc(obj) {
    c.fillStyle = obj.clr;
    c.arc(obj.x, obj.y, obj.r,0,9,false);
    c.fill();
}
function drawTri(obj) {
    let a = {
        x: obj.x,
        y: obj.y + obj.h /2,
    };
    let b = {
        x: obj.x + obj.w /2,
        y: obj.y - obj.h /2,
    };
    let C = {
        x: obj.x - obj.w /2,
        y: obj.y + obj.h /2,
    };
    c.beginPath();
    c.moveTo(a.x, a.y);
    c.lineTo(b.x, b.y);
    c.lineTo(C.x, C.y);
    c.lineTo(a.x, a.y);
    c.fill();
    c.closePath();
}
drawArc(bullet.player);
drawTri(player);
