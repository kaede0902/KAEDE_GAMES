const loop = () => {
    ctx.clearRect(0,0,endX,endY);
    ring(player);
    ring(enemy);
    requestAnimationFrame(loop);
    moveByKeyPress(keyPress,player);
}
loop();


