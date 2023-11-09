class Chest {
  constructor(chestFrame, x, y) {
    this.x = x;
    this.y = y;
    this.w = 64;
    this.h = 64;
    this.isOpen = false;
    this.chestFrame = chestImg[0];
    /* this.openAnimation = openAnimation() */
  }

  openAnimation() {
    if (this.checkCollision(player) && keyIsDown(UP_ARROW)) {
      for (let i = 0; i < chestImg.length; i++) {
        setTimeout(() => {
          this.chestFrame = chestImg[i]}, i*100)
        }      
        
  
    }
  }
  


  
  
  update() {
    this.openAnimation()
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
      ) 
       
    }
  }
  
  /*   animateOpen() {
    if (frameCount % this.frameDelay === 0) {
      this.currentFrame++;
      if (this.currentFrame >= this.animationFrames.length) {
        this.currentFrame = this.animationFrames.length - 1;
        this.isOpen = true;
      }
    }
  }  */
  /*    animateOpen() {
    if (!this.isOpen) {
      return chestImg[0];
    }
  } */
  /*   update(player) {
      if (!this.isOpen) {
        if (keyIsDown(UP_ARROW) && this.checkCollision(player)) {
          this.animateOpen();
        } else {
          this.currentFrame = 0;
        }
      }
    } */