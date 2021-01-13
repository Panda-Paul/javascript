//---------------------X_variablen
let Xpos = 200;
let Xspeed = 3;
//--------------------Y_variablen
let Ypos = 200;
let Yspeed = 3;

let size = 50;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
      fill(255, 0, 251);
  Xpos = random(50, width - size)
  Ypos = random(50, height - size)
}

function draw() {
  background(0, 221, 255);
  console.log("Xpos: " + Xpos + "   Ypos:  " + Ypos)
  
  Xpos = Xpos + Xspeed;
  Ypos = Ypos + Yspeed;
  
  if(Xpos >= width - size/2){
    Xspeed = Xspeed * -1
    fill(random(0, 255), random(0, 255), random(0, 255))
  }
  if(Xpos <= size/2){
    Xspeed = Xspeed * -1
    fill(random(0, 255), random(0, 255), random(0, 255))
  }
  if(Ypos >= height - size/2){
    Yspeed = Yspeed * -1
    fill(random(0, 255), random(0, 255), random(0, 255))
  }
  if(Ypos <= size/2){
    Yspeed = Yspeed * -1
    fill(random(0, 255), random(0, 255), random(0, 255))
  }

  
//   console.log("hi")
  
  
    ellipse(Xpos, Ypos, size);
//  line(0, 0, 400, 400)
}
