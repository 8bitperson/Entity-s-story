var a,aimg
var score
var obstacle,obstaclesgroup,objectimg
var background
var gamestate = "play"
var invisibleGround
var randred
var randblu
var randgreen
var groupvelocity = -12
var levels = 1
alert("Don't touch the ground!")
alert("dont go to far up")
alert("space to super jump and up key for mini jump")
alert("help entity s get home to planet zed 5**98")
alert("Good luck")

function preload(){
   
    
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    a = createSprite(200,windowHeight-400,40,40);
    a.velocityY = 0
    invisibleGround = createSprite(windowWidth/2,windowHeight-25,width,50);
    
    obstaclegroup = createGroup();
}

function draw() {
  //background(randred,randblu,randgreen);
  background(200,50,100)
  level()
  drawSprites()
  textSize(34)
  text("level:" + levels,windowWidth/2,40)
    
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

      if(levels >> 9){
        gamestate = "game done"
      }
   }else if(gamestate == "end"){
    alert("score:"+score+"      To continue please reload page and press ok")
    
  }else if (levels >> 9) {
    obstaclegroup.visible = false
    a.y = windowHeight/2
    a.velocityX = 1
    var portal = createSprite(windowWidth,windowHeight/2,20,windowHeight)
  }
  a.collide(invisibleGround)
  
}
function objective(){
    
    if(frameCount % 70 === 0) {
     var randheight = Math.round(random(windowHeight-400,windowHeight-100));
     var randwidth = Math.round(random(90,300));
     var randY = Math.round(random(windowHeight,100));
     obstacle = createSprite(windowWidth,randY,randwidth,randheight);
     obstacle.debug = false;
     obstacle.velocityX = groupvelocity
     
     //obstacle.collide(invisibleGround)
    
     obstaclegroup.add(obstacle)
    } 
}
function level(){
  if(frameCount %  350 === 0){
     randred = Math.round(random(0,300));
     randblu = Math.round(random(0,300));
     randgreen = Math.round(random(0,300));
     groupvelocity = groupvelocity - 2
     if(levels >> 9){
      levels = levels + 1
     }
  }  
} 