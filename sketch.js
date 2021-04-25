var bg,garden;
var cat;
var mouse;

function preload() {
    //load the images here
    cat = loadImage("images/cat1.png");   
    mouseTeasing = loadAnimation("images/mouse3.png");
    catRunning = loadAnimation("images/cat2.png","images/cat3.png");
    mouseStanding = loadImage("images/mouse1.png");
    catSad = loadImage("images/cat4.png");
    garden = loadImage("images/garden.png");

}

function setup(){
    createCanvas(900,700);
    //create tom and jerry sprites here
    bg = createSprite(500,400,10,50);
    bg.addImage(garden);

    mouse1 = createSprite(100,650);
    mouse1.addImage(mouseStanding);
    mouse1.scale = 0.1;

    cat1 = createSprite(700,650);
    cat1.addImage(cat);
    cat1.scale = 0.1;
 
}

function draw() {

    //Write condition here to evalute if tom and jerry collide
    if(cat1.x - mouse1.x < (cat1.width - mouse1.width)/2) {
         cat1.velocityX=0;
         cat1.addAnimation("tomLastImage", catSad);
          cat1.x =300;
           cat1.changeAnimation("tomLastImage"); 
          mouse1.addAnimation("jerryLastImage", mouseTeasing); 
           mouse1.changeAnimation("jerryLastImage"); }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

if(keyCode === LEFT_ARROW){ 
    cat1.velocityX = -5;
     cat1.addAnimation("tomRunning", catRunning);
      cat1.changeAnimation("tomRunning");
       mouse1.addAnimation("jerryTeasing", mouseStanding);
     mouse1.frameDelay = 25; mouse1.changeAnimation("jerryTeasing"); }

}
