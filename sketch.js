var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var body1, body2, body3;
var body1Body,body2Body,body3Body;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2

	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)

	body1 = createSprite(300, height - 80, 15, 75);
	body1.shapeColor = 'red';

	body2 = createSprite(500, height - 80, 15, 75);
	body2.shapeColor = 'red';

	body3 = createSprite(width / 2, height - 45, 215, 15);
	body3.shapeColor = 'red';

	engine = Engine.create();
	world = engine.world;

	var package_options = {
		restitution: 0.5, isStatic: true
	}

	packageBody = Bodies.circle(width / 2, 200, 5, package_options);
	World.add(world, packageBody);

	var options = {
		restitution : 10, isStatic : true
	}
	var options2 = {
		restitution : 10, isStatic : true
	}
	var options3 = {
		restitution : 10, isStatic : true
	}

	body1Body = Bodies.rectangle(300, height - 80, 15, 75,options);
	World.add(world, body1Body);

	body2Body = Bodies.rectangle(500, height - 80, 15, 75,options2);
	World.add(world, body2Body);

	body3Body = Bodies.rectangle(width / 2, height - 45, 215, 15,options3);
	World.add(world, body3Body);

	// var ground_options = {
	// 	isStatic: true
	// }

	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10/*, ground_options*/);
	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;
	body1.x = body1Body.position.x;
	body1.y = body1Body.position.y;
	drawSprites();
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}