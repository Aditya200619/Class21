const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let wall;
let ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  btn1 = createImg('right.png');
  btn1.position(220,30);
  btn1.size(50,50);
  btn1.mouseClicked(hForce);
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  
  wall1 = new Ground(200,390,400,20)
  wall2 = new Ground(10,200,20,400)
  wall3 = new Ground(200,10,400,20)
  wall4 = new Ground(390,200,20,400)

  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

}

function draw() 
{
  background(51);
  Engine.update(engine);
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()
  ellipse(ball.position.x,ball.position.y,20);
}
function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}

function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
