let inc = .01;
var scl = 10;
let cols, rows;
let zoff = 0;
let particles = [];
let flowField


function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 255)
  cols = floor(width / scl);
  rows = floor(height / scl);

  flowField = new Array (cols * rows);
  for (let i = 0; i < 1000; i++) {
    particles[i] = new Particle()
  }
}

function draw() {
    // background(500)
    let yoff = 0;
    
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        let index = (x + y + cols);
        let r = random() * TWO_PI
        // let r = noise(xoff, yoff, zoff) * TWO_PI * 4;
        let v = p5.Vector.fromAngle(r);
        v.setMag(1);
        flowField[index] = v;
        xoff += inc;

        // stroke(0);
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