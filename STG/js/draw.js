
function drawArc(obj) {
    c.beginPath();
    c.fillStyle = obj.clr;
    c.arc(obj.x, obj.y, obj.r,0,9,false);
    c.fill();
    c.closePath();
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
//    c.lineTo(b.x, b.y);
//    c.lineTo(C.x, C.y);
//    c.lineTo(a.x, a.y);

    console.log(a,b,C);
    c.closePath();
    c.fill();
}
drawTri(player);
console.log(player.x, player.y)
