const BLOCK = {
    BLANK: 0,
    SNAKE: 1,
    FOOD: 2
};


class SnakeGame {
    constructor() { 
        this.board = []; // y => x\
        this.snake = new Snake();
        this.food = new Food(0, 0, 50, 50);
    }

    snakeLoop() {
        this.resetBoard();
        
        this.snake.updateSnakePosition();
        
        this.updateBoard();
        
        this.display();
    }

    resetBoard() {
        this.board = [];
        for (let b = 0; b<50; b++) {
            this.board.push(new Array(50).fill(0));
        }
    }

    updateBoard() {
        for (let i=0; i<this.snake.positions.length; i++) {
            let pos = this.snake.positions[i];
            this.board[pos.y][pos.x] = BLOCK.SNAKE;
        }

        let foodPos = this.food.position;
        this.board[foodPos.y][foodPos.x] = BLOCK.FOOD;
    }

    display() {
        var output = "";
        
        for (let i=0; i<this.board.length; i++) {
            output += "<div class='row'>";
            for (let j=0; j<this.board[i].length; j++) {
                output += `<div class="block`;
                switch(this.board[i][j]) {
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

    changeDirection(newDirection) {
        this.snake.changeDirection(newDirection);
    }

    makeFood() {

    }
}