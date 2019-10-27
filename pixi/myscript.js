let app = new PIXI.Application(
    {width: 256, height: 256, }
);
document.body.appendChild(app.view);

PIXI.loader
    .add('img/cat.png')
    .load(setup);

app.renderer.backgroundColor = 0x061639;

function setup() {
    let cat = new PIXI.Sprite(
        PIXI.loader.resourses['img/cat.png'].texture
    );
    app.stage.addChild(cat);
}
