const DIRECTION = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3
};

class Snake {
    constructor() {
        this.positions = [
            new Pos(25, 25),
            new Pos(24, 25),
            new Pos(23, 25),
            new Pos(22, 25)
        ];
        this.direction = DIRECTION.RIGHT;
        this.isGameOver = false;
        this.extend = 0;
    }

    updateSnakePosition(maxX, maxY) {
        if (this.isGameOver)
            return;


        let oldPos = this.positions[0];
        let pos = new Pos(oldPos.x, oldPos.y);

        switch (this.direction) {
            case DIRECTION.UP:
                pos.y--;
                break;

            case DIRECTION.DOWN:
                pos.y++;
                break;

            case DIRECTION.LEFT:
                pos.x--
                break;

            case DIRECTION.RIGHT:
                pos.x++
                break;
        }

        if (pos.isOutOfRange(0, 0, maxX, maxY) || this.isCollideWithSnake(pos)) {
            this.gameOver();
        }

        this.positions.splice(0, 0, pos);
        if (this.extend == 0) {
            this.positions.pop();
        }
        else {
            this.extend--;
        }
    }

    isEatFood(food) {
        return this.positions[0].equals(food.position);
    }

    extendLength() {
        this.extend = 3;
    }

    changeDirection(newDirection) {
        // dont allow reverse
        if (this.direction == DIRECTION.LEFT && newDirection != DIRECTION.RIGHT ||
            this.direction == DIRECTION.RIGHT && newDirection != DIRECTION.LEFT ||
            this.direction == DIRECTION.UP && newDirection != DIRECTION.DOWN ||
            this.direction == DIRECTION.DOWN && newDirection != DIRECTION.UP) {
            this.direction = newDirection;
        }
    }

    isCollideWithSnake(position) {
        for (let i = 0; i < this.positions; i++) {
            if (this.positions[i].equals(position)) {
                return true;
            }
        }

        return false;
    }

    gameOver() {
        this.isGameOver = true;
    }

}
