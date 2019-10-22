let line = (fromX, fromY, toX, toY, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    ctx.closePath();
}

const drawTriangle = plane => {
    line(plane.left, plane.bottom, 
        plane.right, plane.bottom, '#FFF');
}
drawTriangle(player);
