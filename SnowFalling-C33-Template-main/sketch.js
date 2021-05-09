const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var backgroundImage;
var snowman, snowmanImage;
var kid, kidImage;
var ground;
var snow1,snow2,snow3,snow4,snow5,snow6,snow7;

function preload(){
  backgroundImage = loadImage("snow1.jpg");
  snowmanImage = loadAnimation("0.png","1.png","2.png","3.png");
  kidImage = loadImage("kid.png");
  
}



function setup() {
  engine = Engine.create();
    world = engine.world;
  createCanvas(1200,600);
  snowman = createSprite(600,500);
  snowman.addAnimation("snowman",snowmanImage);
  snowman.scale = 0.8;
  kid = createSprite(1100,500);
  kid.addImage("kid",kidImage);
  kid.scale = 0.5;
  ground = createSprite(600,600,1200,20);
  ground.visible = false;
  snow1 = new Snow(200,20,50)
  snow2 = new Snow(350,10,50)
  snow3 = new Snow(500,170,50)
  snow4 = new Snow(590,150,50)
  snow5 = new Snow(650,50,50)
  snow6 = new Snow(700,80,50)
  snow7 = new Snow(800,90,50)
}

function draw() {
  background(backgroundImage);  
  Engine.update(engine);
  if(keyDown("space")){
    snowman.velocityY = -10;
  }
  snowman.velocityY = snowman.velocityY + 0.8;
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();




  snowman.collide(ground);
  drawSprites();
}