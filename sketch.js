
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin2;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200);

	
	bin2 = new dustbin(525,590,10,10);
	
	

	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
 
  background(255);
  
  drawSprites();
  paper.display();
  ground.display();
  bin2.display();
  
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400});
	}
}


