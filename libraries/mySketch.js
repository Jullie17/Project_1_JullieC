var hb_line=0;
let xspacing = 1; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 100.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yval = []; // Using an array to store height values for the wave

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(0);
  w = windowWidth- 300;
  dx = (TWO_PI / period) * xspacing;
  yval = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  /*stroke(255);
  strokeWeight(2);
  line(0, windowHeight/2, windowWidth, windowHeight/2);*/
  let hb = new HeartBeat();
  let clicking = new Loading();
  if(millis()<5000){
    stroke(255);
    strokeWeight(2);
    line(0, windowHeight/2, windowWidth, windowHeight/2);
    //amplitude=100;
    hb.incTheta();
    hb.display();
  }else if(millis()>=5000){
    clicking.click();
  }
  
}

/*function heartbeatLine(){
  stroke('#39FF14');
  strokeWeight(5);
  line(hb_line, windowHeight/2, hb_line, windowHeight/2);
  hb_line++;
}*/

class HeartBeat{
  constructor( ){
    //this.inc_t = inct;
  }
  incTheta(){
    theta += 0.10;

  // For every x value, calculate a y value with sine function
    let x = theta;
    for (let i = 0; i < yval.length; i++) {
    yval[i] = sin(x) * amplitude;
    x += dx;
    }
    
  }
  display(){
    noStroke();
    for (let x = 0; x < yval.length; x++) {
    fill('#39FF14')
    ellipse(x * xspacing, windowHeight / 2 + yval[x], 10, 10);
    }
    
  }
  
}

class Loading{
  constructor(){
    
  }
  screen(){
    //stroke(255);
    //strokeWeight(5);
    fill(150);
    rect(0,0, windowWidth, windowHeight/8);
    fill(255);
    rect(0, windowHeight/8, windowWidth, windowHeight);
  }
  click(){
    
  }
  loadingScreen(){
    
  }
}

//this is a test for the github push

