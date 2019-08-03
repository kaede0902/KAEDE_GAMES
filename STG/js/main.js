const loop = () => {
    tick++;
    ctx.clearRect(0,0,endX,endY);
    ring(player);
    ring(enemy);
    if (tick%5 == 0)
        makeBullets(player);
    moveBullets(player.bullets);

    requestAnimationFrame(loop);
    moveByKeyPress(keyPress,player);
}
loop();


