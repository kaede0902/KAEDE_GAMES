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

### func.js
#### MOB()
Assign each values to the variable.  
Constructor define
    x,y,w,h,
    clr,spd,hp,drc, and r(w/2).  
#### arc()
base of dot() and ring().  
begins the path and run the drawing line.  
##### dot/ring(point)
fill or stroke arc from the point.  
the point also has color.  

#### Move(obj,x,y)
increase the obj.x and obj.y  


### mob.js
set each (x,y,w,h,spd,hp,clr), using Mob class.  
Settle player and enemy.  
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
