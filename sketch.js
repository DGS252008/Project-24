
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var trash, bin1, bin2, bin3, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(350, 680, 1400, 10);
	trash = new Balls(40, 660 , 50);
	

	bin1 = new Bin(800, 672, 150, 5);
	bin2 = new Bin(728, 650, 5, 50);
	bin3 = new Bin(878, 650, 5, 50);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200, 150, 200);
  
  ground.display();
  trash.display();
  bin1.display();
  bin2.display();
  bin3.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(trash.body, trash.body.position,{x:115, y:-140});
	}
}

