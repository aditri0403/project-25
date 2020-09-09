
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin1,bin2,bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200);

	bin1 = new dustbin(480,680,50,10);
	bin2 = new dustbin(525,640,10,50);
	bin3 = new dustbin(475,640,10,50)

	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(0);
  
  drawSprites();
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:11,y:-11});

	}
}


