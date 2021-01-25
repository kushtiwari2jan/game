var fairy,fairyImage





function preload()
{
  fairyImage=loadanimation("fairy1.png,fairy2.png")

}

function setup() {
  createCanvas(600,600);
  fairy=createSprite(100,400,40,40);
  fairy.addanimation(fairyImage)
}


function draw() {
  background("black");
  drawSprites();
}
