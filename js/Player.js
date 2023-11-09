class Player {
  constructor() {
    this.x = 200;
    this.y = 200;
    this.h = 50;
    this.w = 50;
    this.gravity = 0.2;
    this.speed = {
      y: 0,
      x: 0,
    };
    this.corner = {
      bottomL: this.y + this.h,
      topR: this.x + this.w,
    };
    this.currentImg = captainIdle[0];
  }

  update() {
    this.x += this.speed.x;
    this.lateralCollision();
    this.gravityEffect();
    this.verticalCollision();
    this.movement();
    this.captainAnimation();
  }

  movement() {
    this.x += this.speed.x;
    if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
      this.speed.x = 0;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.speed.x = -5;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.speed.x = 5;
    } else {
      this.speed.x = 0;
    }
    if (keyIsDown(32) && this.speed.y === 0) {
      this.speed.y = -10;
    }
  }

  captainAnimation() {
    let frameIndex = frameCount % (captainIdle.length * 10);
    let imageIndex = floor(frameIndex / 10);
    this.currentImg = captainIdle[imageIndex];
  }

  draw() {
    image(this.currentImg, this.x, this.y, this.h, this.w, 20, 4, 24, 29);
  }
  isColliding(collisionBlock) {
    return (
      this.x <= collisionBlock.x + collisionBlock.w &&
      this.x + this.w >= collisionBlock.x &&
      this.y + this.h >= collisionBlock.y &&
      this.y <= collisionBlock.y + collisionBlock.h
    );
  }
  lateralCollision() {
    for (let i = 0; i < block.length; i++) {
      const collisionBlock = block[i];
      if (this.isColliding(collisionBlock)) {
        if (this.speed.x < 0) {
          this.x = collisionBlock.x + collisionBlock.w + 6;
        }
        if (this.speed.x > 0) {
          this.x = collisionBlock.x - this.w - 6;
        }
      }
    }
  }
  gravityEffect() {
    this.speed.y += this.gravity;
    this.y += this.speed.y;
  }
  verticalCollision() {
    for (let i = 0; i < block.length; i++) {
      const collisionBlock = block[i];
      if (this.isColliding(collisionBlock)) {
        if (this.speed.y < 0) {
          this.speed.y = 0;
          this.y = collisionBlock.y + collisionBlock.h + 0.2;
        }
        if (this.speed.y > 0) {
          this.speed.y = 0;
          this.y = collisionBlock.y - this.h - 0.2;
        }
      }
    }
  }
}
