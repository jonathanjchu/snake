
const refreshRate = 120;
var game = null
var gameTimer = null;


function startNewGame() {
    game = new SnakeGame();
    gameTimer = setInterval(gameLoop, refreshRate);
    document.getElementById("gameover_display").style.visibility = "hidden";
}

function gameLoop() {
    if (game.isGameOver()) {
        // show game over
        document.getElementById("final_score").innerText = game.score;
        document.getElementById("gameover_display").style.visibility = "visible";
        clearTimeout(gameTimer);
    }
    else {
        game.snakeLoop();

        display();

        document.getElementById("score").innerText = game.score;
    }
}

function display() {
    var output = "";

    for (let i = 0; i < game.board.length; i++) {
        output += "<div class='row'>";
        for (let j = 0; j < game.board[i].length; j++) {
            output += `<div class="block`;
            switch (game.board[i][j]) {
                case BLOCK.SNAKE:
                    output += " snake";
                    break;

                case BLOCK.FOOD:
                    output += " food";
                    break;
            }
            output += `" x="${j}" y="${i}">`;
            output += "</div>";
        }
        output += "</div>";
    }

    document.getElementById("display").innerHTML = output;
}

document.onkeydown = function (e) {
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

document.onload = startNewGame();