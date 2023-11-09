class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
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
    this.direction = 1;
  }

  update() {
    this.x += this.speed.x;
    this.lateralCollision();
    this.gravityEffect();
    this.verticalCollision();
    this.movement();
    this.captainAnimation();
    this.platformCollision();
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
      this.speed.y = -8;
    }
    if (this.speed.x > 0) {
      this.direction = 1;
    } else if (this.speed.x < 0) {
      this.direction = -1;
    }
  }

  renderDirection() {
    if (this.direction === 1) {
      image(this.currentImg, this.x, this.y, this.h, this.w, 20, 4, 24, 27);
    } else {
      push();
      translate(this.x + this.w, this.y);
      scale(-1, 1);
      image(this.currentImg, 0, 0, this.h, this.w, 20, 4, 24, 27);
      pop();
    }
  }

  captainAnimation() {
    let speedAnimation = 6;
    let frameIndex = frameCount % (captainIdle.length * speedAnimation);
    let imageIndex = floor(frameIndex / speedAnimation);
    this.currentImg = captainIdle[imageIndex];
  }

  draw() {
    this.renderDirection();
  }
  isColliding(el) {
    return (
      this.x <= el.x + el.w &&
      this.x + this.w >= el.x &&
      this.y + this.h >= el.y &&
      this.y <= el.y + el.h
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
  platColliding(el) {
    return (
      this.x <= el.x + el.w &&
      this.x + this.w >= el.x &&
      this.y + this.h >= el.y &&
      this.y + this.h <= el.y + el.h
    );
  }
  platformCollision() {
    for (let i = 0; i < platform.length; i++) {
      const collisionPlatform = platform[i];
      if (this.platColliding(collisionPlatform)) {
        if (keyIsDown(32) && this.speed.y >= 0) {
          this.speed.y = -8;
          this.y = collisionPlatform.y - this.h;
        } else if (this.speed.y > 0) {
          this.speed.y = 0;
          this.y = collisionPlatform.y - this.h;
        }
      }
    }
  }
  
}


