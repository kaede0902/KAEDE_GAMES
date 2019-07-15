const loop = () => {
    ctx.clearRect(0,0,endX,endY);
    ring(player);
    ring(enemy);
    requestAnimationFrame(loop);
    moveByKeyPress(
        keyPress.right,player,player.x < endX,'r',
    );
    moveByKeyPress(
        keyPress.left,player,(0 < player.x),'l'
    );
}
loop();


