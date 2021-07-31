
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground, left, right;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	var paper_options = {
		restitution : 0.3,
		density : 1.2,
	}

	paper = Bodies.circle(150, 100, 20, paper_options);
	World.add(world, paper);

	ground = new Ground(500, 640, 1000, 20);
	left = new Ground(700, 580, 20, 100);
	right = new Ground(900, 580, 20, 100);

	keyPressed();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
  
  ground.show();
  left.show();
  right.show();

  ellipse(paper.position.x, paper.position.y, 20)

  if (keyIsDown(UP_ARROW)){
	Matter.Body.applyForce(paper, {x : 0, y : 0}, {x : 0, y : -0.05});
}

  drawSprites();
 
}

 function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper, {x : 0, y : 0}, {x : 0, y : -0.05});
	}
 }


