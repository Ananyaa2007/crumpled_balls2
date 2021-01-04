
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    rect1 = new Dustbin(700,590,200,200);
    paper = new Paper(200,300,70);

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();

  paper.display();
  rect1.display();

  keyPressed();
}

function keyPressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body, paper.pos, {x:99299, y:-85});
}
}