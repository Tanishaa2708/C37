const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,2000,30);
  coach1 = new Boggie(50,170,50,50)
  coach2 = new Boggie(150,170,50,50)
  coach3 = new Boggie(250,170,50,50)
  coach4 = new Boggie(350,170,50,50)
  coach5 = new Boggie(450,170,50,50)
  coach6 = new Boggie(550,170,50,50)

  chain1 = new Chain(coach1.body,coach2.body)
  chain2 = new Chain(coach2.body,coach3.body)
  chain3 = new Chain(coach3.body,coach4.body)
  chain4 = new Chain(coach4.body,coach5.body)
  chain5 = new Chain(coach5.body,coach6.body)

  rock1 = new Rock(1100,200,100,100)

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  coach1.show()
  coach2.show()
  coach3.show()
  coach4.show()
  coach5.show()
  coach6.show()

  chain1.show()
  chain2.show()
  chain3.show()
  chain4.show()
  chain5.show()

  rock1.show()

  var collide = Matter.SAT.collides(coach6.body,rock1.body)

  if(collide.collided){
    flag = true
  }
  if (flag === true){
    crashSound.play()
    textSize(30)
    fill ("black")
    text ("CRASH!",width/2,100)
  }
}
  
  function keyPressed(){
    if(keyCode===RIGHT_ARROW){
      Matter.Body.applyForce(coach6.body, coach6.body.position,{x:0.5,y:0})
    
}
  }

  
