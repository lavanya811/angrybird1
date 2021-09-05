const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var log1,log2,log3,log4;
var bird;
var pig1,pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    ground = new Ground(600,height,1200,20);
    log1=new Log(800,260,300,PI/2);
    box3 =new Box(700,240,70,70);
    box4= new Box(900,240,70,70);
    log2 = new Log(810,180,320,PI/2);
    box5 = new Box(805,160,70,70);
    log3 = new Log(760,110,150,PI/7);
    log4 = new Log(870,110,150,-PI/7);
    bird = new Bird(100,100);
    pig1 = new Pig(800,320);
    pig2 = new Pig(800,220);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();
    pig1.display();
    pig2.display();
}