// namespace
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var engine;
var world;
var ball;
var rectangle;
var rectangle2;
var ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;  

  var optionsGround ={
    isStatic: true
  }
  // cria o corpo 
  var optionsBall = {
    restitution:0.5,
    friction:0.02,
    frictionAir:0
  } 
  var optionsRectangle = {
    restitution:0.7,
    friction:0.01,
    frictionAir:0.1
  } 
  var optionsRectangle2 = {
    restitution:0.01,
    friction:1,
    frictionAir:0.3
  } 
  
  ground = Bodies.rectangle(200,360,400,20,optionsGround);
  ball = Bodies.circle(200, 200, 20,optionsBall);
  rectangle = Bodies.rectangle(350,200,20,20,optionsRectangle);
  rectangle2 = Bodies.rectangle(110,200,40,20,optionsRectangle);
  // adicionar o corpo no mundo
  World.add(world, ball);
  World.add(world, rectangle);
  World.add(world, ground);
  World.add(world, rectangle2);
  ellipseMode(RADIUS);
  rectMode(CENTER);
 
}

function draw() 
{
  background(51);

  fill("green");
  ellipse(ball.position.x, ball.position.y, 20, 20);
  fill("blue");
  rect(rectangle.position.x, rectangle.position.y, 20, 20);
  fill("red");
  rect(rectangle2.position.x, rectangle2.position.y, 40, 20);
  fill("white");
  rect(ground.position.x,ground.position.y,400,20);
  Engine.update(engine);
}