let line = (fromX, fromY, toX, toY, color) => {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
    ctx.closePath();
}

const drawPlane = plane => {
    line(plane.left, plane.bottom, 
        plane.right, plane.bottom, '#FFF');
    line(plane.right, plane.bottom,
        plane.center_x, plane.top, '#FFF');
    line(plane.center_x, plane.top, 
        plane.left, plane.bottom, '#FFF')
}
drawPlane(player);
drawPlane(boss);

drawPlane(childL);
drawPlane(childR);

