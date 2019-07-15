class MOB {
  constructor(x,y,w,h, clr,spd,hp,drc,) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  
    this.clr = clr;
    this.spd = spd;
    this.hp = hp;
    this.drc = drc;

    this.r = w/2;
  } // assigning this, one additonal child leads shift all.
}
//let testMOB = new MOB(4,4,4,4,0,2,0);
const defaultPoint = {x:midX,y:midY,r:midX/2,clr:'ddd'}

const arc = (obj) => {
    ctx.fillStyle = ctx.strokeStyle = obj.clr;
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.r, 0,2*Math.PI,false);
}

const dot = (point = defaultPoint) => {
    arc(point);
    ctx.fill();
}
//dot(); //work
const ring = (point = defaultPoint) => {
    arc(point);
    ctx.stroke();
}
//ring(); //work
const move = (obj, x,y) => {
    obj.x += x;
    obj.y += y;
    console.log(obj);
}
const moveByKeyPress = (key,obj) => {
    if (key.right && obj.x < endX){
        move(obj, obj.spd*1, 0);
    } else if(key.left && 0 < obj.x) {
        move(obj,obj.spd*-1, 0);
    } else if(key.up && (0 < obj.y )) {
        move(obj,0, obj.spd*-1);
    } else if(key.down && (obj.y < endY)) {
        move(obj,0, obj.spd*+1);
    }
}


function drawLine(x,y,x2,y2,clr) {
    ctx.beginPath();
    ctx.strokeStyle = '#'+ clr;
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

const satelite = (preBall, ball) => {
    let angle = Math.PI*2 /360 * tick;
    ball.x = preBall.x + Math.cos(angle* ball.spd) * ball.dist;
    ball.y = preBall.y + Math.sin(angle* ball.spd) * ball.dist;
    dot(ball);
}
