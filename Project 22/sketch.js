var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, side1, side2, bottom, side1Body, side2Body, bottomBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	side1 = createSprite = (350, 650, 10, 100);
	side1.shapeColor = color(255);
	side1Body = Bodies.rectangle(350, 650, 10, 100, {restitution: 3, isStatic:true});
	side2 = createSprite = (450, 650, 10, 100);
	side2.shapeColor = color(255);
	side2Body = Bodies.rectangle(450, 650, 10, 100, {restitution: 3, isStatic:true});
	bottom = createSprite = (400, 675, 200, 20);
	bottom.shapeColor = color(255);
	bottomBody = Bodies.rectangle(400, 675, 200, 20, {restitution: 3, isStatic:true});


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	packageBody.setScale = 0.5

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  packageSprite.velocityY = packageSprite.velocityY - 100;
  packageBody.velocityY = packageBody.velocityY - 100;
  
 
 
 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	packageSprite.velocityY = -1
	packageBody.velocityY = -1
	}
	}
