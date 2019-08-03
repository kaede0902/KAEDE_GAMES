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
player.bullets = [];

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
const makeBullets = (obj) => {
    let nowBullet = {
        name: ('bul'+tick),
        x: obj.x, y: obj.y, r: 10, 
    }
    if (obj.bullets.length < 36) {
        obj.bullets.push(nowBullet);
        console.log('made:', obj.bullets,);
    }
}
const moveBullets = (obj) => {
    for (prop in obj) {
        obj[prop].y -= 5;
        let bul = obj[prop];
        console.log(bul.name,':',bul.y,);
        if (bul.y < 0) {
            obj.splice(prop,1);
        }
        dot(obj[prop]);
    }
}
// how to use tick to var name
// let ('bul'+tick) = [];
