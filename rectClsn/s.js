let context, controller, Rectangle,red, white, loop, resize;

context = document.querySelector('canvas').getContext('2d');

controller = {
    pointer_x = 0,
    pointer_y = 0,

    move:function(event) {
        // return location of canvas element
        let rectangle = context.canvas.getBoundingClientRect();
        console.log(rectangle);
        controller.pointer_x = event.clientX - rectangle.left;
        controller.pointer_y = event.clientY - rectangle.top;
    }
};

Rectangle = function (x,y,width,height,color){
    this.x = x; this.y = y;
    this.width = width; this.height = height; 
    this.color = color;
    }

Rectangle.prototype = {
    draw:function() {
        context.beginPath();
        context.rect(this.x, this.y, ,this.width, this.height,);
        context.fillStyle = this.color;
        context.fill();
    },
    get bottom() {return this.y + this.height;}
    get left() {return this.x;}
    get right() {return this.x + this.width;}
    get top() {return this.y;}

    testCollision:function(rectangle) {
        if (this.top > rectangle.bottom || this.right < rectangle.left 
            || this.bottom < rectangle.top || this.left > rectangle.top ) {
            return false;
        }
        return true;
    }
    red = new Rectangle (0,0,64,64, '#FF0');
    white = new Rectangle (context.canvas.width * 0.5 * 32, 
        context.canvas.height * 0.5 - 32, 64, 64, '#FFF');

}
