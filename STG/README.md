# Shooting Game
[PLAY HERE](https://kaede0902.github.io/KAEDE_GAMES/STG/)  
[OLDER VER](https://kaede0902.github.io/KAEDE_GAMES/STG/shooting.html)
## usage
The Red player shoot bullets automatically.  
You can move the players plan.  
Press `d` or `right allow` to move right.  
Press `a` or `left allow ` to move left.  

## files
### set.js
#### Name
Define `canvas` get canvas by id.  
Name canvas.context as `ctx`.  
Name window.innerWidth as `endX`,  
innerHight as `endY`,
endX/2 as `midX`, endY/2 as `midY`.  
`KeyPress.right/left`,`gameEnd`  

## event.js
#### Define
variable: `keyPress.right, left, counter`.  
Trigger: 
`KeyDownHandler`: when 'keydown',  
`KeyUpHandler`: when 'keyup',  
By `addEventListener`  
And set:  
when 39||68||76 is Pressed, `KeyPress.right` is true,   
when 39||68||76 is released, `KeyPress.right` is false,   
when 37||65||72 is Pressed, `KeyPress.left` is true,   
when 37||65||72 is released, `KeyPress.left` is false,   

---------------------
### func.js
#### MOB()
Assign arguments to the variable given.
```
class MOB {
    constructor(x,y,w,h, clr,spd,hp,drc,) {
        this.x = x; this.y = y;
        this.w = w; this.h = h;

        this.clr = clr; this.spd = spd;
        this.hp = hp; this.drc = drc;

        this.r = w/2;
    } 
```
Use like this.  
```
const player = new MOB(
        midX,endY-60,40,120,
        '#07D',12,50,1,
    );
```

#### arc()
base of dot() and ring().  
begins the path and run the drawing line.  
##### dot/ring(point)
fill or stroke arc from the point.  
the point also has color.  

#### Move(obj,x,y)
Add x,y to obj.x, obj.y

#### keyJudge(key,obj,limit)
When `key` is true(pressed), and
limit is true(not overed), 
add obj.x & obj.y += obj.spd.  
```
keyJudge(KeyPress.right ,player,convention.right);
```
Todo: run this in loop.

-----------------
### mob.js
#### Settle mob
Assign values ,
`x`,`y`,`w`,`h`,
`clr`,`spd`,`hp`,`drc`,
using `MOB` class.  
to the each mobs.

By this class define `player` and ` enemy` .  
#### Restrict mob
Define convention of right/left press.  
(right: player.x < endX),
(left : 0 < player.x).  



### main.js
const loop = () => {
    addEventListener?
    c.clearRect(0,0,endX,endY);
    ring(player);
    ring(enemy);
    update
    autoMove
    requestAnimationFrame(loop);
}
