var frect,mrect;

function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 50, 80);
  frect.shapeColor = "green";
  frect.debug = true;
  mrect = createSprite(400,200,80,30);
  mrect.shapeColor = "green";
  mrect.debug = true;
}

function draw() {
  background(255,255,255);  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  
if(mrect.x - frect.x < frect.width/2 + mrect.width/2 && frect.x - mrect.x < frect.width/2 + mrect.width/2
  && mrect.y - frect.y < frect.height/2 + mrect.height/2 && mrect.y - frect.y < frect.height/2 + mrect.height/2){}
  mrect.shapeColor = "blue";
  frect.shapeColor = "blue";
}
else{
  mrect.shapeColor = "green"; 
  frect.shapeColor = "green";
}

  drawSprites();


}