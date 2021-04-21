const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2;
var world,boy,string;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1= new Mango(1100,100,30);
	mango2= new Mango(1050,80,30);
	mango3= new Mango(1250,180,30);
	mango4= new Mango(1200,150,30);
	mango5= new Mango(1000,210,30);
	mango6= new Mango(1050,210,30);
	mango7= new Mango(1100,210,30);


	stoneObj=new Stone(235,420,30);

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);

	launcherObject= new String(stoneObj.body,{x:235,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  launcherObject.display();
  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
stoneObj.display();
  groundObject.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    launcherObject.fly()
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	launcherObject.attach(stoneObj.body);
	}
  }

function detectollision(lstone,lmango){

	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
		if(distance<=lmango.r+lstone.r)
	  {
		Matter.Body.setStatic(lmango.body,false);

	  }

	}