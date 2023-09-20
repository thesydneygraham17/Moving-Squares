let x = 200;
let speed = 50;
let diameter = 40;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lavender");
  ellipse( x, height/2, diameter);
  if(keyIsPressed == true);
  if(x >= width || x <= 0) {
    speed= speed * -1;
    
  }
  x+= speed;
}
