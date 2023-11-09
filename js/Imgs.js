class Imgs {
  constructor(img, x, y) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.w = this.img.width
    this.h = this.img.height
  }
  draw() {
    image(this.img, this.x, this.y);
  }
}


