let img;
function setup() {
  createCanvas(600, 600);
  img = loadImage('background.png')
}

function draw() {
  translate(width / 2, height / 2)
  Image(img, 0, 0)
}