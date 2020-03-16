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
        this.isExtendingLength = false;
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
        if (!this.isExtendingLength)
        {
            this.positions.pop();
        }
        else {
            this.isExtendingLength = false;
        }
    }

    isEatFood(food) {
        return this.positions[0].equals(food.position);
    }

    extendLength() {
        this.isExtendingLength = true;
    }

    changeDirection(newDirection) {
        this.direction = newDirection;
    }

    isCollideWithSnake(position) {
        for (let i=0; i<this.positions; i++) {
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
