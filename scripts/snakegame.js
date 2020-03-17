const BLOCK = {
    BLANK: 0,
    SNAKE: 1,
    FOOD: 2
};

const MAX_WIDTH = 50;
const MAX_HEIGHT = 50;


class SnakeGame {
    constructor() {
        this.board = [];
        this.snake = new Snake();
        this.food = new Food(0, 0, MAX_WIDTH, MAX_HEIGHT);
        this.score = 0;
        this.pointsPerFood = 10;
    }

    snakeLoop() {
        if (!this.snake.isGameOver) {
            this.resetBoard();

            this.snake.updateSnakePosition(MAX_WIDTH, MAX_HEIGHT);

            this.checkFoodCollision();

            this.updateBoard();
        }
    }

    resetBoard() {
        this.board = [];
        for (let b = 0; b < MAX_HEIGHT; b++) {
            this.board.push(new Array(MAX_WIDTH).fill(0));
        }
    }

    updateBoard() {
        if (!this.snake.isGameOver) {
            for (let i = 0; i < this.snake.positions.length; i++) {
                let pos = this.snake.positions[i];
                this.board[pos.y][pos.x] = BLOCK.SNAKE;
            }

            let foodPos = this.food.position;
            this.board[foodPos.y][foodPos.x] = BLOCK.FOOD;
        }
    }

    checkFoodCollision() {
        if (this.snake.isEatFood(this.food)) {
            this.score += this.pointsPerFood;

            do {
                this.food = new Food(1, 1, MAX_WIDTH-1, MAX_HEIGHT-1);
            } while (this.snake.isCollideWithSnake(this.food.position));

            this.snake.extendLength();
        }
    }

    changeDirection(newDirection) {
        this.snake.changeDirection(newDirection);
    }

    isGameOver() {
        return this.snake.isGameOver;
    }
}