const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var backgrimg;
var flakes = [];

function preload(){

backgrimg = loadImage ("snow3.jpg")
}

function setup(){
  createCanvas (1000,600);
  engine = Engine.create();
  world = engine.world;
  if(frameCount % 60 === 0){
    for(var i =0;i<100;i++){
      flakes.push(new Snow(random(0,700),random(0,100)))
    
    }
    }
 //snow2 = new Snow (500,300)
}

function draw(){
  Engine.update(engine);
background(backgrimg);
//snow2.display();
for(var i = 0; i<100; i++){
   flakes[i].display();
   flakes[i].updateY();
//  console.log(flakes) 
}


}