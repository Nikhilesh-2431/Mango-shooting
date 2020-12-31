
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,tree,boyImg,treeImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var stone;
var ground;
function preload()
{
	boyImg = loadImage("boy.png");
	treeImg = loadImage("tree.png");
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	boy = createSprite(160,558,50,50);
	boy.addImage(boyImg);
	boy.scale = 0.1;

	tree = createSprite(775,368,100,100);
	tree.addImage(treeImg);
	tree.scale = 0.2;

    attach1 = new Slingshot(stones.body,{x:100,y:465});

	ground = new Ground(500,680,1000,40);
	mango1 = new Mango(600,290,35);
	mango2 = new Mango(855,325,35);
	mango3 = new Mango(670,260,35);
	mango4 = new Mango(730,200,35);
	mango5 = new Mango(710,320,35);
	mango6 = new Mango(780,250,35);
	mango7 = new Mango(825,720,35);
	stone = new Stone(100,460,23);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);

  drawSprites();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  ground.display();
 
}

function MouseDragged(){
	Matter.body.setPosition(stones.body,{x:mouseX,y:mouseY})
}

function MouseReleased(){
	attach.fly();
}

function detectCollision(lmango,lstone){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if (distance<= lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}

function keyPressed(){
	if (keyCode === 32){
		Matter.body.setPosition(stone.body,{x:235,y:420})
        attach1.attach(stone.body);
	}
}