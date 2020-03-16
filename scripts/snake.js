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
    }

    updateSnakePosition(maxX, maxY) {
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

        if (pos.isOutOfRange(0, 0, maxX, maxY)) {
            this.gameOver();
        }

        this.positions.splice(0, 0, pos);
        this.positions.pop();
    }

    changeDirection(newDirection) {
        this.direction = newDirection;
    }

    gameOver() {
        this.isGameOver = true;
    }

}
