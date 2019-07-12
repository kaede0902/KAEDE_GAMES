# Shooting Game
## usage
The Red player shoot bullets automatically.  
You can move the players plan.  
Press `d` or `right allow` to move right.  
Press `a` or `left allow ` to move left.  

## files
### set.js
set (canvas,ctx),
    define (right/left)keypress, gameEnd,
    name (mid|end,x|y),

### func.js
    has a class Mob() that construct 
    constructor(
        x,y,w,h,
        clr,spd,hp,
    )
    radius is half of width.

### mob.js
    set each (x,y,w,h,spd,hp,clr)

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
