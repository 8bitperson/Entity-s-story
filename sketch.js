var a,aimg
var score
var obstacle,obstaclesgroup,objectimg
var background
var gamestate = "play"
var invisibleGround
var randred
var randblu
var randgreen
alert("Don't touch the ground!")

function preload(){
   
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    a = createSprite(200,windowHeight-400,100,100);
    a.velocityY = 0
    invisibleGround = createSprite(windowWidth/2,windowHeight-25,width,50);
    
    obstaclegroup = createGroup();
}

function draw() {
  //background(randred,randblu,randgreen);
  background(200,0,200)
    drawSprites()
    
  if (gamestate == "play"){
      score = Math.round(frameCount/3)
      if(a.collide(invisibleGround) || a.y < 0 || a.x < 0){
        gamestate = "end"
       }
      objective()
      if(keyDown("space")){
        a.velocityY = - 15
      }
      if(keyDown("UP_ARROW")){
        a.velocityY = - 6
      }
      
      a.velocityY =  a.velocityY +0.8; 

      if(a.y <  0){
        a.y = a.y - 5
        
      }
      a.collide(obstaclegroup) 

      
   }else if(gamestate == "end"){
    alert("score:"+score+"      To continue please press r and ok")
    
  }
  a.collide(invisibleGround)
  
}
function objective(){
    
    if(frameCount % 70 === 0) {
     var randheight = Math.round(random(500,700));
     var randwidth = Math.round(random(90,300));
     var randY = Math.round(random(windowHeight,100));
     obstacle = createSprite(windowWidth,randY,randwidth,randheight);
     obstacle.debug = false;
     obstacle.velocityX = -12
     
     //obstacle.collide(invisibleGround)
    
     obstaclegroup.add(obstacle)
    } 
}
function level(){
  if(frameCount % 1777 === 0){
     randred = Math.round(random(0,300));
     randblu = Math.round(random(0,300));
     randgreen = Math.round(random(0,300));
  }
} 