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

function drawArc(
    x = midX,y = midY,r = midX/2,clr = 'DDD'
){
//    x= x|| midX; y= y|| midY; r= r|| midX/2; clr= clr|| 'fff';
    ctx.beginPath();
    ctx.fillStyle = '#'+ clr;
    ctx.arc(x,y,r,0,2*Math.PI,false);
    ctx.fill();
}
const dflt = {x:midX,y:midY,r:midX/2,clr:'ddd'}
const dot = (p = dflt) => {
    ctx.beginPath();
    ctx.fillStyle = '#'+ p.clr;
    ctx.arc(p.x, p.y, p.r,0,2*Math.PI,false);
    ctx.fill();
}
const circle = (p = dflt) => {
    ctx.beginPath();
    ctx.strokeStyle = '#'+ p.clr;
    ctx.arc(p.x, p.y, p.r,0,2*Math.PI,false);
    ctx.stroke();
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
