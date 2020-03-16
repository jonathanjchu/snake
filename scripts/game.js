
var game = new SnakeGame();
var gameTimer = setInterval(gameLoop, 400);

function gameLoop() {
    game.snakeLoop();
}

document.onkeydown = function(e) {
    if (e.keyCode == 37) {
        // left
        game.changeDirection(DIRECTION.LEFT);
    }
    else if (e.keyCode == 39) {
        // right
        game.changeDirection(DIRECTION.RIGHT);
    }
    else if (e.keyCode == 40) {
        // down
        game.changeDirection(DIRECTION.DOWN);
    }
    else if (e.keyCode == 38) {
        // up
        game.changeDirection(DIRECTION.UP);
    }
}
