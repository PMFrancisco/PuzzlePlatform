class Chest {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 64;
    this.h = 64;
    this.isOpen = false;
    this.chestFrame = chestImg[0];
  }

  openAnimation() {
    if (!this.isOpen) {
      if (this.checkCollision(player) && keyIsDown(UP_ARROW)) {
        for (let i = 0; i < chestImg.length; i++) {
          setTimeout(() => {
            chest.chestFrame = chestImg[i];
          }, i * 100);
        }
        chestSound.play();
        this.isOpen = true;
        setTimeout(() => {
          currentLevel++;
          if (currentLevel === 2) {
            level2();
          }
          if (currentLevel === 3) {
            level3();
          }
          if (currentLevel === 4) {
            currentLevel = 1;
          }
        }, 2000);
      }
    }
  }

  nextLevel;

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
