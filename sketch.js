let motorLow;
let motorMid;
let motorHigh;
let font;
let firstpage;

function setup() {
  createCanvas(1000, 800, WEBGL);
  
  font = loadFont("BlackHanSans-Regular.ttf");
  
  motorLow = new MotorLow();
  motorMid = new MotorMid();
  motorHigh =new MotorHigh();
  firstpage = new FirstPage();
  

    
  
}

function draw() {
	background(190,80,90);
  
  firstpage.display();
  firstpage.text();
  

    
  
  if (keyCode === 81) {
    firstpage.backgroundforLow();
    motorLow.light();
    motorLow.display();
    motorLow.sellect();
 
   
      
  }
  
   if (keyCode === 87) {
  firstpage.backgroundforMid();
  motorMid.light();
  motorMid.display();
   }
  
     if (keyCode === 69) {
  firstpage.backgroundforHigh();
  motorHigh.light();
  motorHigh.display();
   }



}


class MotorLow {
  
  constructor() {
 
  }
  
  light() {
    
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;  
    
  ambientLight(160, 160, 160);
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
	fill(190);
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
    
  ambientLight(160, 160, 160);
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
	fill(190);
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
    
  ambientLight(160, 160, 160);
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
	fill(190);
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
  
  display() {
    
    fill(255);
    textFont(font);
    textSize(80);
    text('모터의 주파수를 골라보세요.',-430,0);
    
    noStroke();
    rect(this.xpos - this.xfix,this.ypos + this.yfix,this.x,this.y);
    
    noStroke();
    rect(this.xpos+330- this.xfix,this.ypos+ this.yfix,this.x,this.y);
    
    noStroke();
    rect(this.xpos+660- this.xfix,this.ypos+ this.yfix,this.x,this.y);
  }
  
  
  text() {
    
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
    
    
  }
  
  backgroundforMid() {
    
 background(190,80,90);  
    
    
  }
  
    backgroundforHigh() {
    
background(190,80,90);
    
    
  }
  
 
  
  
  
  
  
}

