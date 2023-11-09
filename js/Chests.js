class Chest {
  constructor(chestFrame, x, y) {
    this.x = x;
    this.y = y;
    this.w = 64;
    this.h = 64;
    this.isOpen = false;
    this.chestFrame = chestImg[0];
  }

  openAnimation() {
    if (this.checkCollision(player) && keyIsDown(UP_ARROW)) {
      for (let i = 0; i < chestImg.length; i++) {
        setTimeout(() => {
          chest.chestFrame = chestImg[i];
        }, i * 100);
      }
      setTimeout(() => {
        currentLevel++;
        if (currentLevel === 2) {
          level2();
        }
      }, chestImg.length * 300);
    }
  }

  update() {
    this.openAnimation();
  }

  draw() {
    image(this.chestFrame, this.x, this.y);
  }

  checkCollision(player) {
    return (
      player.x + player.w >= this.x &&
      player.x <= this.x + this.w &&
      player.y + player.h >= this.y &&
      player.y <= this.y + this.h
    );
  }
}
