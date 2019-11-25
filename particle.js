

function Particle() {
    this.pos = createVector(random(width/4, 3 * width/4) ,random(height/4, 3 * height/4));
    this.acc = createVector(0,0);
    this.maxspeed = 1;
    this.vel = createVector(0,0);
    this.prevPos = this.pos.copy();
    this.h = 


    this.update = function() {
        this.prevPos = this.pos.copy()
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.vel.limit(this.maxspeed);
        this.acc.mult(0);
    }

    this.follow = function(vectors) {
        let x = floor(this.pos.x / scl);
        let y = floor(this.pos.y / scl);
        let index = x + y + cols;
        let force = vectors[index];
        this.applyForce(force);
    }

    this.applyForce = function (force) {
        this.acc.add(force)

    }

    this.show = function() {
        stroke(0, noise(zoff)*20);
        strokeWeight(2)
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    }

    this.edges = function () {
        if (this.pos.x > width) this.pos.x = random(width/4, 3 * width/4);
        if (this.pos.x < 0) this.pos.x = random(width/4, 3 * width/4);
        if (this.pos.y > height) this.pos.y = 0;
        if (this.pos.y < 0) this.pos.y = height;
        
    }
}