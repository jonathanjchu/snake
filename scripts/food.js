class Food {
    constructor(minX, minY, maxX, maxY) {
        let x = Math.floor(minX + Math.random() * (maxX - minX));
        let y = Math.floor(minY + Math.random() * (maxY - minY));

        this.position = new Pos(x, y);
    }
}