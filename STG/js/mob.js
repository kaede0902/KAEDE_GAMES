const player = new MOB(
    midX,endY-60,40,120,
    '#07D',12,50,1,
);
console.log('Player:',player);
const enemy = new MOB(
    endX/2.5,endY/3.0,60,120,
    '#D00',10,200,1,
);
const convention = {
    right: player.x<endX,
    left:  0<player.x,
}
console.log('enemy',enemy);
ring(player);
ring(enemy);

const msg = {
    usage: {
        x: midX,
        y: endY * 0.1,
        text : 'Press D(<-) or A(->) to move',
        size: endX * 0.05 + 'px serif',
        clr: '#04F',
    },
    clear: {
        x: midX,
        y: midY,
        w: 600,
        text: 'CLEAR!!',
        clr: 'lightblue',
    },
    reload: {
        x: midX,
        y: midY*1.5,
        w: 600,
        text: 'Please reload browser',
        clr: '#FFF',
    },
    score: {
        x: midX,
        y: midY*1.3,
        w: 600,
        text: 'Score: ',
        clr: '#F22',
    },
};

//(x,y,w,h,  clr,spd,hp,dir) 
//(x,y,r,clr,spd)

/*
const enemy = new Mob(
  endX/2.5, endY/3.0, 60,120,
  'D00', 10, 200, 1);
*/
const player_bullet = () => {
    return {
        x: player.x,
        y: player.y,
        r: 10,
        spd: 48,
        clr: '#BBB',
    };
}
const bullet = {
    player: player_bullet,
    enemy: {
        c: {
            x: enemy.x,
            y: enemy.y,
            r: endY * 0.04,
            clr: '#F00',
            spd: 12,
        }, 
        l: {
            x: enemy.x -2,
            y: enemy.y,
            r: endY * 0.04,
            clr: '#F00',
            spd: 12,
        }, 
        r: {
            x: enemy.x +2,
            y: enemy.y,
            r: endY * 0.04,
            clr: '#F00',
            spd: 12,
        }, 
    },
};
