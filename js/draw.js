let canvasWidth = 1024;
let canvasHeight = (9 / 16) * canvasWidth;
let level1;

function preload() {
  level1Img = loadImage("./assets/img/backGroundLevel1.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  player = new Player();
  level1 = new Sprite(level1Img, 0, 0);
}

function draw() {
  background(255);
  level1.draw();
  block.forEach((block) => {
    block.draw();
  });
  player.draw();
  player.update();
}
