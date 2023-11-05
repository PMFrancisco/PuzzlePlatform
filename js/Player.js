class Player {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.gravity = 0.2;
    this.fallSpeed = 0;
    this.jump = -12;
    this.h = 100;
    this.w = this.w;
  }

  /*   jump() {
    this.fallSpeed += this.jump;
  } */
  update() {
    this.fallSpeed += this.gravity;
    this.y += this.fallSpeed;

    if (this.y + this.h > canvasHeight) {
      this.fallSpeed = 0;
      this.gravity = 0;
      this.y = canvasHeight - this.h
    }
  }
  draw() {
    fill(51, 138, 255);
    square(this.x, this.y, this.h);
  }
}
