var bg_img;
var iss_img, sc_img;
var smoke_img;

var iss, sc;
var hasDocked = false;

function preload(){
  bg_img = loadImage("bg.png");
  sc_img = loadImage("sc.png");
  iss_img = loadImage("iss.png")
  smoke_img = loadImage("smoke.png")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  iss = createSprite(285,240);
  iss.addImage(iss_img);
  iss.scale = 0.15

  sc = createSprite(285,240);
  sc.addImage(sc_img);
  sc.scale = 0.15
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(!hasDocked){
    sc.x = sc.x + random(-1,1);

    if(keyDown("UP_ARROW")){ //up
      sc.y = sc.y - 2;
    }

    if(keyDown("DOWN_ARROW")){ //down
      sc.y = sc.y + 2;
    }

    if(keyDown("LEFT_ARROW")){ //left
      sc.x = sc.x - 2;
    }

    if(keyDown("RIGHT_ARROW")){ //right
      sc.x = sc.x + 2;
    }
    
  }
}
function hasDocked (sc,iss){
  if(sc.isTouching(iss)){
    fill("black")
    print("Docking was succesful! :D")
    hasDocked = true;
  }
}