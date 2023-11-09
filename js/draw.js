let canvasWidth = 1024;
let canvasHeight = (9 / 16) * canvasWidth;
let currentLevel = 1;
let captainIdle = [];
let captainJump = [];
let chestImg = [];
let levelImg = [];
function preload() {
  for (let i = 1; i <= 3; i++) {
    levelImg.push(loadImage(`./assets/img/Levels/backGroundLevel${i}.png`));
  }
  for (let i = 1; i <= 5; i++) {
    captainIdle.push(
      loadImage(
        `./assets/img/Captain Clown Nose without Sword/01-Idle/Idle 0${i}.png`
      )
    );
  }
  for (let i = 1; i <= 3; i++) {
    captainJump.push(
      loadImage(
        `./assets/img/Captain Clown Nose without Sword/03-Jump/Jump 0${i}.png`
      )
    );
  }
  for (let i = 1; i <= 6; i++) {
    chestImg.push(loadImage(`./assets/img/Chest/Chest Close 0${i}.png`));
  }
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  if (currentLevel === 1) {
    level1();
  } else if (currentLevel === 2) {
    level2();
  }
}

function draw() {
  background(255);
  level.draw();
  block.forEach((block) => {
    block.draw();
  });
  if (platform) {
    platform.forEach((plat) => {
      plat.draw();
    });
  }
  chest.draw();
  chest.update();
  player.draw();
  player.update();
}
