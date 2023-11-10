function level1() {
  player = new Player(200, 200);
  level = new Imgs(levelImg[0], 0, 0);
  chest = new Chest(767, 350);
  block = initBlocks(colLevel1);
  platform = initPlatform(platformLevel1);
}

function level2() {
  player = new Player(66, 66);
  level = new Imgs(levelImg[1], 0, 0);
  chest = new Chest(767, 222);
  block = initBlocks(colLevel2);
  platform = initPlatform(platformLevel2);
}
function level3() {
  player = new Player(200, 300);
  level = new Imgs(levelImg[2], 0, 0);
  chest = new Chest(767, 222);
  block = initBlocks(colLevel3);
  platform = initPlatform(platformLevel3);
}
