# Move and Collision Function
## key events
### defintion, (operate keys)
| move | keyCode | keyChar |
| :-: | :--: | :--: |
| left | 37 | <- |
| left | 65 | A |
| left | 72 | H |
| right | 39 | -> |
| right | 68 | D |
| right | 76 | L |
| up | 38 | (up) |
| up | 87 | W |
| up | 75 | K |
| down | 40 | (down) |
| down | 83 | S |
| down | 74 | J |

```js
const operateKeys = {
    left: [37, 65, 72,],
    right: [39, 68, 76,],
    up: [38, 87, 75,],
    down: [40, 83, 74,],
};
```

#### event
* This fire `KeyDownHandler` and `KeyUpHandler`

```js
document.addEventListener(
    'keydown',KeyDownHandler,false);
document.addEventListener(
    'keyup',KeyUpHandler,false);
```
* This changes the bool, keyPress. 

```js
const KeyDownHandler = e => {
    if (operateKeys.left.includes(e.keyCode))
        keyPress.left = true;
    if (operateKeys.right.includes(e.keyCode))
        keyPress.right = true;
    if (operateKeys.up.includes(e.keyCode))
        keyPress.up = true;
    if (operateKeys.down.includes(e.keyCode))
        keyPress.down = true;
    keyPress.counter++;
}
```

* same as keyUp


## set world
* make america great again!

## planes
* constructor.
* write planes data.

* left, right, top, bottom, 
* color, speed, HP, center_x, center_y,

## draw
* easy drawing line function
* fromX, fromY, toX, toY, color,

* set plane obj, and output triangle of the plane!!

