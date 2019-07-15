const loop = () => {
    ctx.clearRect(0,0,endX,endY);
    ring(player);
    ring(enemy);
    moveByKeyPress(keyPress,player);

    requestAnimationFrame(loop);
}
loop();


