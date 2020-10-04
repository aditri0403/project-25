
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var bin;
var sidebin1,sidebin2;
var ground;

function preload()
{
	binImg = loadImage('pictures/dustbingreen.png');
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200);

	
	bin = createSprite(540,670,10,10);
	bin.addImage(binImg);
	bin.scale = 0.3;
	sidebin1 = new dustbin (500,680,10,60);
	sidebin2 = new dustbin (580,680,10,60);
	
	ground = new Ground(600,height,1200,20);

	Engine.run(engine);
  
}


function draw() {
 
  background(255);
  
  drawSprites();
  paper.display();
  ground.display();
  bin.display();
  sidebin1.display();
  sidebin2.display();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-350});
	}
}


