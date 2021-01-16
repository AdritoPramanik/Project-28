const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;
var tree;
var ground;
var boy;
var stone;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var sling;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	tree = new Tree(1100, 320, 350, 500);
	ground = new Ground(700, 570, 1400, 20);
  stone = new Stone(300, 350, 50, 50);
  
	boy = new Boy(300, 480, 240, 300);
	mango1 = new Mango(1100, 100, 50, 50);
	mango2 = new Mango(1150, 150, 70, 70);
	mango3 = new Mango(1030, 130, 70, 70);
	mango4 = new Mango(1000, 210, 60, 60);
	mango5 = new Mango(1100, 250, 50, 50);
	mango6 = new Mango(1170, 270, 70, 70);
	mango7 = new Mango(1200, 200, 50, 50);
	mango8 = new Mango(1100, 170, 55, 55);
	mango9 = new Mango(1040, 270, 55, 55);
	mango10 = new Mango(1240, 270, 55, 55);
	sling = new Slingshot(boy.body, stone.body);

	Engine.run(engine);
  
}


function draw() {
  background(255);
  Engine.update(engine);
  tree.display();
  ground.display();
  stone.display();
  boy.display();
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  sling.display()
  drawSprites();
 
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
    console.log("hello");
}
function mouseReleased(){
    sling.fly();
}




