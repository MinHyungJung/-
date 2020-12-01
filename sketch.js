var learnings = [];
var meStrength = 25;
let maxlifespan = 100;


function setup() {
  createCanvas(700, 700);
  me = createVector(350,350);
}


function learning(x, y, xvel, yvel){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-1, 1), random(-2, 2));
    this.lifespan = 10;
  
  
    this.draw = function(){
      stroke(200, this.lifespan);
    strokeWeight(2);
    fill(127, this.lifespan*10);
       ellipse(this.pos.x,this.pos.y,12,12); 
    }
  
    this.move = function(){
      this.pos.add(this.vel);
      this.vel.mult(friction);
      this.vel.limit(maxSpeed);
      this.lifespan++;
    }
  
    this.magnet = function(){
      var magpull = p5.Vector.sub(me,this.pos);
      var magstrength = meStrength / this.pos.dist(me);
      magpull.normalize().mult(magstrength);
      this.vel.add(magpull);
    }
}
