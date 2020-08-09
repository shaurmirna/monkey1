var bananaImage,obstacleImage,bananaGroup,obstacleGroup,monkeyImage,
backImage,monkey,banana,obstacle,backGround,invisibleGround,cloudsGroup;
var score;
//initiate Game STATEs
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
 backImage =loadImage ("jungle2.jpg");
  
 monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png",
"Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png",
  "Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

 obstacleImage=loadImage("stone.png");
  bananaImage=loadImage("banana.png");
}


function setup() {
  createCanvas(600,300);

  backGround = createSprite(0,0,600,300);
  backGround.addImage("back",backImage);
  backGround.x = backGround.width /2;
  backGround.velocityX = -2;
  backGround.scale=1.5;
 
  
  invisibleGround = createSprite(200,300,400,10);
  invisibleGround.visible = false;

   monkey = createSprite(100,250,60,30);
  monkey.addAnimation("back",monkeyImage);
  monkey.scale=0.1;
 
    cloudsGroup = new Group();
    cloudsGroup2=new  Group();
   cloudsGroup3=new  Group();
  
    stroke("black");
  textSize(20);
  fill("black");
  text("Score: "+ score, 500,50);
  //score
    score = 0;
  

  
}  


function draw(){
 background(255);
  //scoring
   text("Score: "+ score, 500,50);
  
   monkey.collide(invisibleGround);

   if(gameState === PLAY){
      if (backGround.x < 0){
      backGround.x = backGround.width/2;
    }
  
  if (cloudsGroup.isTouching(monkey)){
          cloudsGroup.destroyEach();
           score=score+2;
               switch(score) {
      case 10: monkey.scale=0.14;
              break;
      case 20: monkey.scale=0.16;
              break;
      case 30: monkey.scale=0.18;
              break;
      case 40: monkey.scale=0.20;
              break;
      default: break;
    }
      
      }
  
   if (cloudsGroup2.isTouching(monkey)){
       gameState=END;  
   
   }

   if(keyDown("space") && monkey.y >= 159){
      monkey.velocityY = -12 ;
     // playSound("jump.mp3");
    }
      monkey.velocityY = monkey.velocityY + 0.8;
     
     spawnClouds();
     spawnobs();
    spawnobs2();

     if (cloudsGroup3.isTouching(monkey)){
           monkey.scale=0.1;
   
   }
    
   }
 
  
  else if(gameState === END){    
     if(keyDown("space") && monkey.y >= 159){
      monkey.velocityY = 0 ;
     // playSound("jump.mp3");
    }
     monkey.collide(invisibleGround);
     backGround.velocityX = 0;
     cloudsGroup.setVelocityXEach(0);
     cloudsGroup2.setVelocityXEach(0);
    cloudsGroup3.setVelocityXEach(0);
     cloudsGroup.setLifetimeEach(-1);
     cloudsGroup2.setLifetimeEach(-1);
    cloudsGroup3.setLifetimeEach(-1);
    }

    
     text("Score: "+ score, 500,50);

  drawSprites();
  
    stroke("white");
    textSize(20);
    fill("white");
    text("Score: "+ score, 500,50);
}
function spawnClouds() {
  //write code here to spawn the clouds
  if ( frameCount % 175 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage("banana",bananaImage);
    cloud.scale = 0.05;
    cloud.velocityX = -3;
     //assign lifetime to the variable
    cloud.lifetime = 210;
    cloudsGroup.add(cloud);
}
}
function spawnobs() {
  //write code here to spawn the clouds
  if ( frameCount % 400 === 0) {
    var cloud = createSprite(600,280,40,10);
    cloud.addImage("banana",obstacleImage);
    cloud.scale = 0.1;
    cloud.velocityX = -3;
     //assign lifetime to the variable
    cloud.lifetime = 210;
    cloudsGroup2.add(cloud);
}
}

function spawnobs2() {
  //write code here to spawn the clouds
  if ( frameCount % 350 === 0) {
    var cloud = createSprite(600,280,40,10);
    cloud.addImage("banana",obstacleImage);
    cloud.scale = 0.1;
    cloud.velocityX = -5;
     //assign lifetime to the variable
    cloud.lifetime = 210;
    cloudsGroup3.add(cloud);
}
}