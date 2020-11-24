
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var block1,block2,block3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(50,610,40);
	block1 = new dustbin(650,620,10,50);
	block2 = new dustbin(400,620,10,50);
	//block3 = new blockbottom(575,610,10,50);

	ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
	ground.shapeColor = "yellow";
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  block1.display();
  block2.display();
  //block3.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50});
	}
}
