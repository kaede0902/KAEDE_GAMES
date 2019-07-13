# Shooting Game
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
#### Define
`KeyPress.right/left`,`gameEnd`  
By `addEventListener`  
Use "keydown/up" to trigger `key(Up/Down)Handler`.  
And set:  
when 39 & 68 is Pressed, `KeyPress.right` is true,   
when 37 & 63 is Pressed, `KeyPress.left` is true,   
when 39 & 68 is released, `KeyPress.right` is false,  
when 37 & 63 is released, `KeyPress.left` is false,  

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

## constructer
Just make a copy object.
```
class Mob {
constructor(origin) {
    this.x = origin.x;
    this.y = origin.y;
    this.w = origin.w;
    this.h = origin.h;
    this.clr = origin.clr;
    this.spd = origin.spd;
    this.hp = origin.hp;
    this.dir = origin.dir;
    }
}
let testMob = new Mob(mobObj);
```
This can args to child of the var.  
```
class Ball {
    constructor(x,y,r,clr,spd) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.clr = clr;
        this.spd = spd;
    }
}  
let testBall = new Ball(4,4,4,4,4);
console.log(testBall);
```
