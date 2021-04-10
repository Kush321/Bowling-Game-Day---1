const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var backgroundImg, ballImg, pinImg;
var pull;
function preload(){
  backgroundImg=loadImage("images/background.jpg");
  ballImg=loadImage("images/bowlingball.png");
  pinImg=loadImage("images/bowlingpin.png");
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
	world = engine.world;
  ball=new Ball(600,550,60);
  pull=new String(ball.body,{x:600,y:550});
  pin1=new Pin(600,200,40,100);
  pin2=new Pin(650,150,40,100);
  pin3=new Pin(550,150,40,100);
  pin4=new Pin(700,100,40,100);
  pin5=new Pin(500,100,40,100);
}

function draw() {
  background(150);
  Engine.update(engine);
  
  ball.display();
  pull.display();
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  
  detectCollision(ball,pin1);
 /* detectCollision(ball,pin2);
  detectCollision(ball,pin3);
  detectCollision(ball,pin4);
  detectCollision(ball,pin5);*/
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
  pull.fly();
}
function detectCollision(ball, pin1){
  if(ball.isTouching(pin1)){
    Matter.Body.setStatic(pin1.body,false);
  }
}