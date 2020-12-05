let friction = 0.98;
let maxlifespan = 100;
let maxSpeed = 20;
var MinMinds = [];
var Pop1;
var Pop2;
var meStrength = 15;
var SallyMinds = [];
var msx = 50;
var msy = 50;
var i = 0

function setup() {
  createCanvas(1500, 800);
  Pop1 = createVector(350,350);
  Pop2 = createVector(1250,350);
  page = new artPage();
}


function draw() {
  
  page.FirstPage(page.FirstPage_bool);
  
  if (key === 's') {
      page.SeasonSellectPage(page.SeasonSellectPage);
      
    }
}




//---------------page design--------------------------

class artPage {
  
  constructor() {
    this.FirstPage_bool = true;
    this.SeasonSellectPage_bool = false;
    

  
  
  this.FirstPage = function(bool) {
    
  if (bool == true) {               
  background(30,100,250);
  strokeWeight(6);
  fill(255,255,0);

  
   textSize(70);
    text('Start     s',570,600);
    
    noFill()
    rect(540,535,400,80);
    line(780,535,780,615);
    
   i = i + 1;
    

     if  (random(12)>11){
   
    fill(205,255,0);
    textSize(100);
    text('여겨름 울가 봄을', 380,400);
    }
    
    else {
    
    fill(255,245,0);
    textSize(100);
    text('봄 여름 가을 겨울', 380,400);
    }
  }
    
    
  }
    
  
    
    
  this.SeasonSellectPage = function(bool) {
    if (bool) {
    
  background(255);
    fill(250,255,0);
    rect(0,0,20,2000);
    fill(250,255,0);
    rect(0,0,4000,20);
    fill(250,255,0);
    rect(1500,0,20,2000);
    fill(250,255,0);
    rect(0,800,4000,20);
      
    
      
    

  
  SallyMinds.push(new SallyMind(random(1230,1270),random(330,370),random(-1,1),random(-1,1)));
  for (let p of SallyMinds){
    p.draw();
    p.move();
    p.magnet();
  }
    
         MinMinds.push(new MinMind(random(330,370),random(330,370),random(-1,1),random(-1,1)));
  for (let p of MinMinds){
    p.draw();
    p.move();
    p.magnet();
  }
  
  MinMinds = MinMinds.filter(p => { return p.lifespan < maxlifespan})
  
  SallyMinds = SallyMinds.filter(p => { return p.lifespan < maxlifespan})
  }
    var SeasonxSize =300;
    var SeasonySize =500;
    var SeasonyPos = 450;
    var SeasonxInterval = 350;
    var s = 0;
    var v = 0;
    var downy = 70;
    
    fill(255,255,0);
    
    rect(230,SeasonyPos,SeasonxSize,SeasonySize)
  
    rect(230+SeasonxInterval,SeasonyPos,SeasonxSize,SeasonySize);
    
    s = SeasonxInterval + SeasonxInterval;
    
    rect(230+s,SeasonyPos,SeasonxSize,SeasonySize);
    
    v= s + SeasonxInterval
    
    rect(230+v,SeasonyPos,SeasonxSize,SeasonySize);
    
    
    
   fill(107,250,100);
    
    rect(230,SeasonyPos+downy,SeasonxSize,SeasonySize-490);
    
    rect(230+SeasonxInterval,SeasonyPos+downy,SeasonxSize,SeasonySize-490);
    
    rect(230+s,SeasonyPos+downy,SeasonxSize,SeasonySize-490);
    
    rect(230+v,SeasonyPos+downy,SeasonxSize,SeasonySize-490);
    
    
    fill(0);
    textSize(100);
  text('Choose your Season',300,120);
    text('봄',175,SeasonyPos+190);
    text('여름',130+SeasonxInterval,SeasonyPos+190);
    text('가을',130+s,SeasonyPos+190);
    text('겨울',130+v,SeasonyPos+190);
    

    

    
    


    
    
    
  }
    

 
  
}
}


//------------------------learning & Confetti---------------------------------


function MinMind(x, y, xvel, yvel){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-1, 1), random(-2, 2));
    this.lifespan = 10;
  
  
    this.draw = function(){
      stroke(200, this.lifespan);
    strokeWeight(2);
    fill(107,250,100, this.lifespan*10);
       ellipse(this.pos.x,this.pos.y,12,12); 
    }
  
    this.move = function(){
      this.pos.add(this.vel);
      this.vel.mult(friction);
      this.vel.limit(maxSpeed);
      this.lifespan++;
    }
  
    this.magnet = function(){
      var magpull = p5.Vector.sub(Pop1,this.pos);
      var magstrength = meStrength / this.pos.dist(Pop1);
      magpull.normalize().mult(magstrength);
      this.vel.add(magpull);
    }
}



function SallyMind(x, y, xvel, yvel){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-1, 1), random(-2, 2));
    this.lifespan = 10;
  
  
    this.draw = function(){
    rectMode(CENTER);
    fill(107,250,100, this.lifespan*10);
    stroke(255, this.lifespan);
    strokeWeight(2);
    push();
    translate(this.pos.x, this.pos.y);
    var theta = map(this.pos.x, 0, width, 0, TWO_PI * 2);
    rotate(theta);
    rect(0, 0, 12, 12);
    pop();
    }
  
    this.move = function(){
      this.pos.add(this.vel);
      this.vel.mult(friction);
      this.vel.limit(maxSpeed);
      this.lifespan++;
    }
  
    this.magnet = function(){
      var magpull = p5.Vector.sub(Pop2,this.pos);
      var magstrength = meStrength / this.pos.dist(Pop2);
      magpull.normalize().mult(magstrength);
      this.vel.add(magpull);
    }
}
