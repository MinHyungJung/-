let motorLow;
let motorMid;
let motorHigh;
let font;
let firstpage;
let LowMusic;
var LowWave;
var MidWave;
var HighWave;


function setup() {
  createCanvas(1000, 800, WEBGL);
  
  font = loadFont("BlackHanSans-Regular.ttf");
  
  motorLow = new MotorLow();
  motorMid = new MotorMid();
  motorHigh =new MotorHigh();
  firstpage = new FirstPage();
  LowMusic = loadSound('LowMotorMusic.mp3',loaded);
  LowMusic.setVolume(0.7);
  LowWave = new p5.Oscillator();
  MidWave = new p5.Oscillator();
  HighWave = new p5.Oscillator();


    
  
}


function loaded() {
  
  LowMusic.loop();
  
}


function draw() {
	background(190,80,90);
  
  firstpage.displayInfo();
  firstpage.displaySellect();
  

  

    
  
  if (keyCode === 81) {
    
    firstpage.backgroundforLow();
    
    motorLow.light();
    motorLow.display();
    motorLow.sellect();
    LowWave.setType('sawtooth');
    LowWave.amp(0.05);
    LowWave.freq(130);
    LowWave.start();
    MidWave.stop();
    HighWave.stop();
    
  }
     else {    
     LowWave.stop();  
  }

  
   if (keyCode === 87) {
     
  firstpage.backgroundforMid();

    motorMid.light();
    motorMid.display();
    MidWave.setType('sawtooth')
    MidWave.amp(0.02);
    MidWave.freq(280);
    LowWave.stop();
    MidWave.start(); 
    HighWave.stop();   
   }
  
    else {    
     MidWave.stop();  
  }

  
     if (keyCode === 69) {
       
  firstpage.backgroundforHigh();

     motorHigh.light();
     motorHigh.display();
     HighWave.setType('sawtooth')
     HighWave.amp(0.02);
     HighWave.freq(510); 
     HighWave.start(); 
     LowWave.stop();
     MidWave.stop();

       
   }
  
  else {    
     HighWave.stop();  
  }



}


class MotorLow {
  
  constructor() {
 
  }
  
  light() {
    
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;  
    
  ambientLight(180, 180, 180);
  pointLight(255, 255, 255, locX, locY, 100);  
    
  }
  
  display() {
    
    push();
	translate(0, -300);
	rotateY(frameCount * 0.09);
	rotateZ(0.005);
	fill(25,100,120);
	noStroke();
	cylinder(100, 250);
	pop();
    
    push();
    translate(0,-160);
	rotateY(frameCount * 0.1);
	rotateZ(0.07);
	fill(200);
	noStroke();
	cylinder(8, 90);
	pop();
  }
  
  sellect() {
    

      
    
  }
  
  
}





class MotorMid {
  
  constructor() {
 
  }
  
  light() {
    
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;  
    
  ambientLight(180, 180, 180);
  pointLight(255, 255, 255, locX, locY, 100);  
    
  }
  
  display() {
    
    push();
	translate(0, -300);
	rotateY(frameCount * 0.2);
	rotateZ(0.005);
	fill(25,100,120);
	noStroke();
	cylinder(100, 250);
	pop();
    
    push();
    translate(0,-160);
	rotateY(frameCount * 0.7);
	rotateZ(0.07);
	fill(200);
	noStroke();
	cylinder(8, 90);
	pop();
  }
  
  
}


class MotorHigh {
  
  constructor() {
 
  }
  
  light() {
    
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;  
    
  ambientLight(180, 180, 180);
  pointLight(255, 255, 255, locX, locY, 100);  
    
  }
  
  display() {
    
    push();
	translate(0, -300);
	rotateY(frameCount * 0.6);
	rotateZ(0.005);
	fill(25,100,120);
	noStroke();
	cylinder(100, 250);
	pop();
    
    push();
    translate(0,-160);
	rotateY(frameCount * 2);
	rotateZ(0.07);
	fill(200);
	noStroke();
	cylinder(8, 90);
	pop();
  }
  
  
}

class FirstPage {
  
  constructor() {
    this.x = 120;
    this.y = 170;
    this.xpos =-390;
    this.ypos = 130;
    this.xfix = 0;
    this.yfix = 70;
    
  }
  
  displayInfo() {
    
    fill(255);
    textFont(font);
    textSize(80);
    text('모터의 주파수를 골라보세요.',-430,0);
    
  
  }
  
  displaySellect() {
    
    //--------------Rect------------------
    
    fill(255);
   noStroke();
    rect(this.xpos - this.xfix,this.ypos + this.yfix,this.x,this.y);
    
    noStroke();
    rect(this.xpos+330- this.xfix,this.ypos+ this.yfix,this.x,this.y);
    
    noStroke();
    rect(this.xpos+660- this.xfix,this.ypos+ this.yfix,this.x,this.y); 
    
    //--------------Text------------------
    
    fill(190,80,90);
    textFont(font);
    textSize(40);
  
    text('q',this.xpos+48,350);
    text('w',this.xpos+43+330,350);
    text('e',this.xpos+48+660,350);
    textSize(90);
    text('약',this.xpos+20,280);
    
    text('중',this.xpos+23+330,280);
    
    text('강',this.xpos+22+660,280);
    
  }
  
  backgroundforLow() {
    
    background(190,80,90);
    
    firstpage.displaySellect();
    
    fill(255,180,0);
    noStroke();
    rect(this.xpos - this.xfix,this.ypos + this.yfix-10,this.x,10);
    rect(this.xpos - this.xfix,this.ypos + this.yfix+170,this.x,10);
    rect(this.xpos - this.xfix,this.ypos + this.yfix,10,this.y);
    rect(this.xpos - this.xfix+110,this.ypos + this.yfix,10,this.y);
    
    
    
  }
  
  backgroundforMid() {
    
    background(190,80,90); 
    
    firstpage.displaySellect();
    
    
    fill(255,180,0);
    noStroke();
    rect(this.xpos+330- this.xfix,this.ypos+ this.yfix-10,this.x,10);
    rect(this.xpos+330- this.xfix,this.ypos+ this.yfix+170,this.x,10);
    rect(this.xpos+330- this.xfix,this.ypos+ this.yfix,10,this.y);
    rect(this.xpos+330- this.xfix+110,this.ypos+ this.yfix,10,this.y);
    
  }
  
    backgroundforHigh() {
    
    background(190,80,90);
    firstpage.displaySellect();
    
    
    fill(255,180,0);
    noStroke();
    rect(this.xpos+660- this.xfix,this.ypos+ this.yfix-10,this.x,10); 
    rect(this.xpos+660- this.xfix,this.ypos+ this.yfix+170,this.x,10); 
    rect(this.xpos+660- this.xfix,this.ypos+ this.yfix,10,this.y); 
    rect(this.xpos+660- this.xfix+110,this.ypos+ this.yfix,10,this.y); 
    
  }
  
 
  
  
  
  
  
}
