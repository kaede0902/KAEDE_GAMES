class MOB {
  constructor(left, right, top, bottom,
    color, speed, HP, direction,) {

    this.left = left; this.right = right;
    this.top = top; this.bottom = bottom;
  
    this.color = color; this.speed = speed;
    this.HP = HP; this.direction = direction;

    this.center_x = ( this.left + this.right ) /2
    this.center_y = ( this.bottom + this.top ) /2
  } 
}

const player = new MOB(
    world.center.x, world.center.x + 30,
    world.bottom -60 , world.bottom + -10,
    '#FFF', 15, 500, 1,
);
console.log(player);

