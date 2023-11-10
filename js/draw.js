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
  boxImg = loadImage("./assets/img/box.png");
  chestSound = loadSound("./assets/sound/open-chest.m4a");
  backgroundMusic = loadSound("./assets/sound/background-music.wav");
  jumpSound = loadSound("./assets/sound/jump.wav");
}

function setup() {
  backgroundMusic.loop();
  createCanvas(canvasWidth, canvasHeight);
  level1();
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
