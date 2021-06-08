
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground,paper,box1,box2,box3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20);
paper=new Paper(100,600,10)
dustbin1=new Dustbin(650,660,200,20)
dustbin2=new Dustbin(550,620,20,100)
dustbin3=new Dustbin(750,620,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  ground.display()
  paper.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
}
 
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}


