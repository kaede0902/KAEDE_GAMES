src = 'set.js';
const player = {
        x: midX,
        y: endY-60,
        w: 40,
        h: 120,
        spd: 12,
        hp: 50,
        clr: '#0095DD',
};
const enemy = {
        x: endX/2.5,
        y: endY/3.0,
        w: 60,
        h: 120,
        spd: 10,
        hp: 200,
        clr: '#D00',
        drc: 1,
};
const bullet = {
    player: {
        x: player.x,
        y: player.y,
        r: 10,
        spd: 48,
        clr: '#BBB',
    },
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

console.log(player,enemy,bullet, msg);
