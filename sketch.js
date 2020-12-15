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
    motorLow.light();
    motorLow.display();
    motorLow.sellect();
      
  }
  
   if (keyCode === 87) {
  
  motorMid.light();
  motorMid.display();
   }
  
     if (keyCode === 69) {
  
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
    this.x = 180;
    this.y = 250;
    this.xpos =-400;
    this.ypos = 100;
    this.fix =30;
    
  }
  
  display() {
    
    fill(255);
    textFont(font);
    textSize(80);
    text('모터의 주파수를 골라보세요.',-430,0);
    
    noStroke();
    rect(this.xpos - this.fix,this.ypos,this.x,this.y);
    
    noStroke();
    rect(this.xpos+330- this.fix,this.ypos,this.x,this.y);
    
    noStroke();
    rect(this.xpos+660- this.fix,this.ypos,this.x,this.y);
  }
  
  
  text() {
    
    fill(190,80,90);
    textFont(font);
    textSize(40);
  
    text('q',this.xpos+45,330);
    text('w',this.xpos+45+330,330);
    text('e',this.xpos+45+660,330);
    
    
  }
  
  
  
  
  
}




