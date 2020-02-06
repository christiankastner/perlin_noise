let inc = .01;
var scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowField
let start = 500
let middle = 900
let end = 1050


function setup() {
  createCanvas(1000, 600);
  // colorMode(HSB, 255)
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowField = new Array (cols * rows);
  for (let i = 0; i < start; i++) {
    particles[i] = new Particle()
    particles[i].color = color(0,0,153)
  }
  for (let i = start; i < middle; i++) {
    particles[i] = new Particle()
    particles[i].color = color(204,0,0)
  }
  for (let i = middle; i < end; i++) {
    particles[i] = new Particle()
    particles[i].color = "erase"
  }
}

function draw() {
    // background(0,0,0, 0.75)
    let yoff = 0;
    
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = (x + y + cols);
        let r = noise(xoff, yoff, zoff) * TWO_PI * 2;
        let v = p5.Vector.fromAngle(r);
        v.setMag(1);
        flowField[index] = v;
        xoff += inc;

        stroke(0);
        // push();
        // translate(x * scl, y * scl,);
        // rotate(v.heading())
        // line(0, 0 , scl, 0)

        // pop();

      }
      yoff += inc;
      zoff += 0.00005;
    }
    for (let i = 0; i < particles.length; i ++) {
      particles[i].follow(flowField)
      particles[i].update();
      particles[i].show();
      particles[i].edges()
    }
}