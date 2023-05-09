//as1_spacesquare.js
let x = 300;
let y = 300;
let xspeed = 2;

function setup() {
    let sketch = createCanvas(600, 800);
    sketch.parent("mycanvas");
    background(200, 150, 255);
}//end setup

function draw() {
    //Game Area
    fill(50, 50, 0)
    rect(0,0, width, 600);

    //Draw Ship
    fill(255);
    stroke(0);
    strokeWeight(1);
    square(x,y,20);
    x += xspeed;

    //Forbidden Galaxy
    fill(255, 0, 0);
    rect(0,0,width,50);
    fill(255);
    noStroke();
    textSize(20);
    textAlign(CENTER);
    textFont("Audiowide");
    text("Forbidden Galaxy!", width/2, 40)
    

    //HUD Area
    fill(100, 100, 0);
    rect(0, 600, width, 200)

}//end draw

function keyPressed() {
    if(key==='a'){
        xspeed = -3;
    } else if( key==='d'){
        xspeed = 3;
    }
    

}//end keyPressed

function mousePressed() {
    print("MouseX: " + mouseX + "     MouseY: " + mouseY);
}//end mousePressed