let motor;
let test;

function setup() {
  createCanvas(1000, 800, WEBGL);
  
  motor = new Motor();
  test = new Test();
  
  
}

function draw() {
	background(190,80,90);
  
   if (keyCode === 81) {
  
  motor.light();
  motor.display();
   }
  
  else {
     test.display();
    
  }

	

}

class Test {
  
  display() {
    
    fill(0);
    rect(100,100,100,100);
    
    
  }
  
  
  
}





class Motor {
  
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
	rotateY(frameCount * 0.7);
	rotateZ(0.07);
	fill(190);
	noStroke();
	cylinder(8, 90);
	pop();
  }
  
  
}



