var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1, wall2, wall3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color(255)

	wall1Sprite = createSprite(width/2, 650, 200, 20);
	wall1Sprite.shapeColor = "red";

	wall2Sprite = createSprite(height/1.4, 610, 20, 100);
	wall2Sprite.shapeColor = "red";

	wall3Sprite = createSprite(height/2.4, 610, 20, 100);
	wall3Sprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	var package_options = {

		restitution: 0

	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	fill('red');
	var wall1_options = {

		isStatic:true

	}
	wall1 = Bodies.rectangle(width/2, 650, 200, 20, wall1_options);
	World.add(world,wall1);

	var wall2_options = {

		isStatic:true

	}
	wall2 = Bodies.rectangle(height/1.4, 610, 20, 100, wall2_options);
	World.add(world,wall2);

	var wall3_options = {

		isStatic:true

	}
	wall3 = Bodies.rectangle(height/2.4, 610, 20, 100, wall3_options);
	World.add(world,wall3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  wall1Sprite.x = wall1.position.x
  wall1Sprite.y = wall1.position.y

  wall2Sprite.x = wall2.position.x
  wall2Sprite.x = wall2.position.x

  wall3Sprite.x = wall3.position.x
  wall3Sprite.x = wall3.position.x

  keyPressed();
  drawSprites();
 
}

function keyPressed() {

  if (keyDown("DOWN_ARROW")) {
	
	var package_options = {

		restitution: 0

	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);


	} 


}
