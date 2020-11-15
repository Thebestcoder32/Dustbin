
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var bin;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Paper(700,320,70,70);
	bin1 = new Dustbin(920,320,70,70);
	bin2 = new Dustbin(920,320,70,70);
	bin = new Dustbin(920,320,70,70);
	
    
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	   //Create a Ground
	   ground = Bodies.rectangle(width/2, 650, width, 10 ,option);
		World.add(world, ground);
   
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(dustbin1,false);
	 
	
   
   }
	}
	
