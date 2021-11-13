let hb = [];
let s=0;

function setup() {
  createCanvas(1000, 800);
  for (let a = 0; a < 5; a+=0.5) {
    hb[a] = new Heartbeat(random(80, 100),random(100, 600), random(TWO_PI));
  }
}

function draw() {
  if(millis()<=10000){
    let second = new onStage();
  second.display();
  if(mouseIsPressed == true){
    second.display();
    second.attention();
    second.sweating();
    }
    /*background(0);
    //heartbeatScreen();
    for (let x = 0; x < width; x += 1) {
      let y = 0;
      for (let wave of waves) {
        y += wave.evaluate(x);
      }
    noStroke();
    fill(0, 255, 0);
    ellipse(x, y + height / 2, 10);
    }
    for (let wave of waves) {
      wave.update(0.02);
    }
    heartbeatScreen();*/
  }//else if(millis>10000 && millis<=20000){
  
  /*let second = new onStage();
  second.display();
  if(mouseIsPressed == true){
    second.display();
    second.attention();
    second.sweating();
    }
  }*/else{
    background(0);
    noStroke();
    fill(255, 0, 0, 60);
    rect(0,0,width, height);
    //heartbeatScreen();
    for (let x = 0; x < width; x += 0.5) {
      let y = 0;
      for (let hb_x of hb) {
        y += hb_x.define(x);
      }
    noStroke();
    fill(0, 255, 0);
    ellipse(x, y + height / 2, 10);
    }
    for (let hb_x of hb) {
      hb_x.update(0.42);
    }
    //background(255, 0, 0, 70);
    heartbeatScreen();
  }
}


function heartbeatScreen(){
  stroke(255,50);
  strokeWeight(5);
  line(50, 0, 50, height);
  line(0, height/2, width, height/2);
  
  noStroke();
  fill(150);
  rect(0, 0, width, 50);
  rect(0,0, 50, height);
  rect(0, height-50, width, height-50);
  rect(width-50, 0, width-50, height);
  
  noFill();
  stroke(150);
  strokeWeight(100);
  ellipse(width/2, height/2, width+200, height+200);
}

class Heartbeat {
  constructor(amp, period, theta) {
    this.amplitude = amp;
    this.period = period;
    this.theta = theta;
  }

  define(x) {
    return sin(this.theta + (TWO_PI * x) / this.period) * this.amplitude;
  }

  update(incp) {
    this.theta += incp;
  }
}
//--------------------------------------------------------------------------------------------------
class onStage{
  constructor(){
    
  }
  display(){
    audience(0,0,0);
    stage();
    interviewee();
  }
  attention(){
    audience(255, 0, 0);
    stage();
    spotlight();
    interviewee();
    
  }
  sweating(){
    if(s<=60){
    push();
    translate(0, s);
    fill(0,0,255);
    ellipse(width/2+40, (1.6*height)/3-30, 5, 5+s);
    pop();
    s+=0.5;
    }else{
      s=0;
    }
  }
}

function stage(){
  noStroke();
  fill('#5C4033');
  ellipse(width/2, height, width*2, height/2);
}
function audience(er, eg, eb){
  background(130);
  //stage();
  for(let a=0; a<= 800; a+=100){
    for(let b=0; b<=500; b+=100){
      push();
      translate(a, b);
      interviewer(er, eg, eb);
      pop();
    }
  }
}
function interviewer(er, eg, eb){
  noStroke();
  fill(150);
    i=100;
  ellipse(i, i, 100);
    fill(er, eg, eb);
    ellipse(i-15.5, i-12.5, 20);
    ellipse(i+15.5, i-12.5, 20);

}

function interviewee(){
  //desk for speech
  fill('#362511');
  //ellipseMode(CENTER);
  ellipse(width/2, (5.5*height)/9, 168, 80);
  rectMode(CENTER);
  rect(width/2, (8*height)/9 - 30, width/6, height/2);
  //person
  
  fill('#FFDCB1');
  rect(width/2, (1.7*height)/3, 50, 100); //neck
  stroke(0);
  ellipse((3.4*width)/8, (5.8*height)/8, 30, 150); // left arm
  ellipse((4.6*width)/8, (5.8*height)/8, 30, 150); // right arm
  //hands
  //fill('#FFDCB1');
  ellipse((3.4*width)/8, (6.5*height)/8, 30, 30); // left hand
  ellipse((4.6*width)/8, (6.5*height)/8, 30, 30); // right hand
  //noStroke();
  rectMode(CORNER);
  rect(width/2-75, (2.85*height)/3-250, 150, 150);// body
  //rect(width/2, (2.85*height)/3, 150, 500); // body
  noStroke();
  ellipse(width/2, (1.9*height)/3, 150, 40); // shoulder
  
  
  noStroke();
  fill(255);
  ellipse(width/2, (1.6*height)/3, 100, 100); // head
  
  //leg
  fill(0,50,200);
  stroke(0);
  strokeWeight(2);
  rect((width/2)-75, (4.95*height)/6, 75, 200);
  rect((width/2), (4.95*height)/6, 75, 200);
  
  
}

function spotlight(){
  noStroke();
  background(30, 150);
  fill(255, 234, 0, 100);
  //rect(width/2.5, 0, 20, height);
  //noFill();
  //stroke('FFE800');
  beginShape();
  vertex(width/2.5, 0);
  vertex((3.5*width)/6, 0);
  vertex((3*width)/4, height);
  vertex(width/4, height);
  endShape(CLOSE);
}