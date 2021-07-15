var bgimg,issimg,sc1img,sc2img,sc3img,sc4img
var iss,sc1
var hasDocked=false
function preload(){
  bgimg=loadImage("spacebg.jpg");
  issimg=loadImage("iss.png");
  sc1img=loadImage("spacecraft1.png");
  sc2img=loadImage("spacecraft2.png");
  sc3img=loadImage("spacecraft3.png");
  sc4img=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

 sc1=createSprite(400,300, 50, 50);
 sc1.addImage(sc1img)
 sc1.scale=0.2

  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issimg);


}

function draw() {
  background(bgimg);
  
  if(!hasDocked){
    sc1.x+=random(-1,1)

    if(keyDown("UP_ARROW")){
      sc1.y-=1
    }
    if(keyDown("LEFT_ARROW")){
      sc1.x-=1
      sc1.addImage(sc4img)
    }
    if(keyDown("RIGHT_ARROW")){
      sc1.x+=1
      sc1.addImage(sc3img)
    }
    if(keyDown("DOWN_ARROW")){
      sc1.addImage(sc2img)
    }
  }

  if(sc1.y<=(iss.y+90)&& sc1.x<=(iss.x-10)){
    hasDocked=true
    text("Docking Successfull",200,200)
  }
  drawSprites();
}