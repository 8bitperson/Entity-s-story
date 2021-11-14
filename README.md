# Entity-s-story
var a,aimg
var score
var obstacle,obstaclesgroup,objectimg
var background
var gamestate = "play"
var invisibleGround
alert("Don't touch the ground! To play use space key")

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
    background(150, 0, 200);
    drawSprites()
  if (gamestate == "play"){
      score = Math.round(frameCount/3)
      if(a.collide(invisibleGround) || a.y < 0 || a.x < 0){
        gamestate = "end"
       }
      objective()
      if(keyDown("space")){
        a.velocityY = - 8
      }
      
      a.velocityY =  a.velocityY +1; 

      if(a.y <  0){
        a.y = a.y - 1
        
      }
      a.collide(obstaclegroup) 

      
   }else if(gamestate == "end"){
    alert("score: "+score+"       To continue please press reload and ok")
    
  }
  a.collide(invisibleGround)
  
}
function objective(){
    
    if(frameCount % 70 === 0) {
     var randheight = Math.round(random(400,500));
     var randwidth = Math.round(random(90,300));
     var randY = Math.round(random(windowHeight,0));
     obstacle = createSprite(windowWidth,randY,randwidth,randheight);
     obstacle.debug = false;
     obstacle.velocityX = -(6 + 3*score/100);
     
     //obstacle.collide(invisibleGround)
    
     obstaclegroup.add(obstacle)
    } 
}   
