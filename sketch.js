const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1;
var ground;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new BBox(350,250,50,250);
  box2 = new BBox(200,150,250,50);
  box3 = new BBox(50,250,50,250);
  box4 = new OBox(100,275,50,200);
  box5 = new OBox(300,275,50,200);
  flagPole = new Flag(175,100,4,50);
  flag = new Flag(200,90,45,30);
  ground = new Ground(200,390,400,20);
}

function draw() {
  background(0,100,250);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  flagPole.display();
  flag.display();
  ground.display();
}