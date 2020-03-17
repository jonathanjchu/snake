class Pos {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    equals(rhs) {
        return this.x == rhs.x && this.y == rhs.y;
    }

    isOutOfRange(minX, minY, maxX, maxY) {
        return this.x < minX || this.y < minY || this.x >= maxX || this.y >= maxY;
    }
}