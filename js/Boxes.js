class Box {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.img = boxImg;
    this.gravity = 0.2;
    this.speed = {
      y: 0,
      x: 0,
    };
  }
  draw() {
    image(this.img, this.x, this.y);
  }
}
