const colLevel1 = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 292, 0, 0, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 292, 0, 0, 292, 292, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 292, 0, 0, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292, 292,
  292, 292, 292, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

const numRows = 9; // Number of rows
const numCols = 16; // Number of columns

const twoDArray = [];

for (let i = 0; i < numRows; i++) {
  const rows = colLevel1.slice(i * numCols, (i + 1) * numCols);
  twoDArray.push(rows);
}

class Wall {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 64;
    this.h = 64;
  }
  draw() {
    fill(255);
    rect(this.x, this.y, this.w, this.h);
  }
}
const block = [];
twoDArray.forEach((row, yIndex) => {
  row.forEach((el, xIndex) => {
    if (el === 292) {
      block.push(new Wall(xIndex * 64, yIndex * 64));
    }
  });
});
