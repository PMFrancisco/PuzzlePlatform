let canvasWidth = 1024;
let canvasHeight = (9 / 16) * canvasWidth;
let level1;
let captainIdle = [];
let captainJump = [];
let chestImg = [];
function preload() {
  level1Img = loadImage("./assets/img/backGroundLevel1.png");
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
  player = new Player();
  level1 = new Imgs(level1Img, 0, 0);
  chest = new Chest(this.chestFrame, 767, 348)
}

function draw() {
  background(255);
  level1.draw();
  block.forEach((block) => {
    block.draw();
  });
  chest.draw();
    chest.update();
  player.draw();
  player.update();
}
