
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var radius=40;
var groundObj;
var left_side;
var right_side;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     var ball_option={
		 isStatic:false,
		 restitution:0.3,
		 friction:0,
		 density:1.2
	 }
	 ball=Bodies.circle(260,100,radius/2,ball_option);
	 World.add(world,ball);
	 groundObj=new ground(width/2,570,width,20)
	 left_side=new ground(900,500,20,120);
	 right_side=new ground(1050,500,20,120);

	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display()
  left_side.display()
  right_side.display()
  function keyPressed(){
	  if(keyCode===DOWN_ARROW){
		  Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	  }
  }
  drawSprites();
 
}



