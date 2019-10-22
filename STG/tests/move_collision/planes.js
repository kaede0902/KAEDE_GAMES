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
    world.center.x -15, world.center.x + 15,
    world.bottom -60 , world.bottom + -10,
    '#FFF', 15, 500, 1,
);
const boss = new MOB(
    world.center.x - 30, world.center.x + 30,
    world.top + 105, world.top + 5,
    '#FFF', 15, 500, 1,
); // left, right, top, bottom,
const childL = new MOB(
    world.center.x + 220, world.center.x + 200,
    world.top + 160, world.top + 110,
    '#FFF', 15, 500, 1,
);
const childR = new MOB(
    world.center.x - 240, world.center.x - 220,
    world.top + 160, world.top + 110,
    '#FFF', 15, 500, 1,
);

