

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

    console.log(a,b,C);
    c.closePath();
    c.fill();
}
//drawTri(player);
//console.log(player.x, player.y)
