const playerMove = (player) => {
    if (keyPress.left && player < world.left)
        ;
}



const move = (obj, x,y) => {
    obj.x += x;
    obj.y += y;
    console.log('moved:',obj);
}
const moveByKeyPress = (key,obj) => {
    if (key.right && obj.x + 32< endX){
        move(obj, obj.spd*1, 0);
    } else if(key.left && 0 < obj.x) {
        move(obj,obj.spd*-1, 0);
    } else if(key.up && (32 < obj.y )) {
        move(obj,0, obj.spd*-1);
    } else if(key.down && (obj.y < endY)) {
        move(obj,0, obj.spd*+1);
    }
}
