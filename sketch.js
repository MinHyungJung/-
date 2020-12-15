let motor;

function setup() {
  createCanvas(900, 800, WEBGL);
  
  motor = new Motor();
  
  
}

function draw() {
	background(50);
  
  motor.light();
  motor.display();


	

}

class Motor {
  
  constructor() {
 
  }
  
  light() {
    
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;  
    
  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);  
    
  }
  
  display() {
    
    push();
	translate(0, -300);
	rotateY(frameCount * 0.09);
	rotateZ(0.03);
	fill(25,40,200);
	noStroke();
	cylinder(50, 200);
	pop();
     
  }
  
  
}

