let canvasWidth = 1280;
let canvasHeight = (9 / 16) * canvasWidth;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  player = new Player();
}

function draw() {
  background(51);
  player.draw();
  player.update()
}
