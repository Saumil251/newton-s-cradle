const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;


function setup() {
	createCanvas(800, 700);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stand=new Stand(400,100,400,30)
ball1=new Ball(320,500)
ball2=new Ball(420,500)
chain1=new Chain({x:320,y:100},ball1.body)
chain2=new Chain({x:420,y:100},ball2.body)
ball3=new Ball(520,500)
chain3=new Chain({x:520,y:100},ball3.body)
ball4=new Ball(220,500)
chain4=new Chain({x:220,y:100},ball4.body)


	Engine.run(engine);
  
}


function draw(){
    background("lightblue");
    Engine.update(engine);
stand.display();
ball1.display()
chain1.display()
chain2.display()
ball2.display()
ball3.display();
chain3.display();
ball4.display();
chain4.display();
}

