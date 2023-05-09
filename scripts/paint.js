var colour = "#000000"
var size = 10
var drawingName = "Untitled"
var rainbowModeOn = false


const rainbowColours = ["#fc0303", "#fc8803", "#fcfc03", "#20fc03", "#0328fc", "#7f03fc"]

var rainbowIndex = 0
var rainbowLength = rainbowColours.length
var oldColour;


function setup() {


   let canvas = createCanvas(800, 500);
  
  canvas.parent("mycanvas");
  background(255);
  cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/blackpntbrush.cur')
  let red = createButton('red')
  let orange = createButton('orange')
  let yellow = createButton('yellow')
  let green = createButton('green')
  let blue = createButton('blue')
  let purple = createButton('purple')
  let pink = createButton('pink')
  let brown = createButton('brown')
  let black = createButton('black')
  let rainbow = createButton('rainbow')
  let erase = createButton('eraser')
  let sizeInput = createInput('brush size')
  sizeInput.size(100);
  let save = createButton('save')
  save.position(7,550)
  let clearButton = createButton('clear')
  clearButton.position(50,550)
  let drawingNameInput = createInput('Untitled')
  drawingNameInput.size(100);
  drawingNameInput.position(95,550)
  let para = createP("This program was made using p5.js v1.6.0")
  para.position(0, 600)
  let a = createA('http://p5js.org/', '(https://p5js.org/)');
  a.position(315, 620)
  let instructions = createButton('Instructions')
  instructions.position(7, 580)

  red.mousePressed(function (){
    cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/redpntbrsh.cur')
    rainbowModeOn = false
    colour = "#fc0303"
  }) 

    orange.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/orange_paint_brush.cur')
      rainbowModeOn = false
    colour = "#fc8803"
  }) 

    yellow.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/yellowpntbrsh.cur')
      rainbowModeOn = false
    colour = "#fcfc03"
  }) 

    green.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/greenpntbrsh.cur')
      rainbowModeOn = false
    colour = "#20fc03"
  }) 

    blue.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/bluepntbrsh.cur')
      rainbowModeOn = false
    colour = "#0328fc"
  }) 

    purple.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/purplepntbrsh.cur')
      rainbowModeOn = false
    colour = "#7f03fc"
  }) 

    pink.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/pink_paint_brush.cur')
      rainbowModeOn = false
    colour = "#ff96cb"
  }) 

    brown.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/brownpntbrush.cur')
      rainbowModeOn = false
    colour = "#38241b"
  }) 

    black.mousePressed(function (){
      cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/blackpntbrush.cur')
      rainbowModeOn = false
    colour = "#000000"
  }) 

      rainbow.mousePressed(function (){
        cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/rainbowpntbrsh.cur')
      rainbowModeOn = true
    
  }) 

  erase.mousePressed(function (){
    cursor('https://danilionn.github.io/danis-bot-website/assets/cursors/eraser.cur')
    rainbowModeOn = false
  colour = "#ffffff"
}) 

sizeInput.input(function(){
  size = this.value()
})

save.mousePressed(function() {
  saveCanvas(canvas, drawingName, 'png');
 })
 
 clearButton.mousePressed(function() {
   clearFunction()
 })


 drawingNameInput.input(function(){
   drawingName = this.value()
 })

 instructions.mousePressed(function() {
  window.alert('INSTRUCTIONS:\n\nClick and drag on the white box to draw\n\nClick on the buttons with the names of colours to change the colour of your brush\n\nClick the eraser button to be able to erase\n\nPut a number in the box that says "size" to change your brush size\n\nChange the text in the box that says "Untitled" to change the name of your drawing\n\nClick the save button to save your drawing to your device\n\nClick the clear button or press the Delete key on your keyboard to clear the canvas and start over')
})

 red.parent("inputs");
 orange.parent("inputs");
 yellow.parent("inputs");
 green.parent("inputs");
 blue.parent("inputs");
 purple.parent("inputs");
 pink.parent("inputs");
 brown.parent("inputs");
 black.parent("inputs");
 rainbow.parent("inputs");
 erase.parent("inputs");
 sizeInput.parent("inputs");
 save.parent("inputs");
 clearButton.parent("inputs");
 drawingNameInput.parent("inputs");
 instructions.parent("inputs");
para.parent("credits")
a.parent("credits")
};

function draw() {

frameRate(15);


  if (rainbowModeOn === true) {
    colour = rainbowColours[rainbowIndex]

    rainbowIndex += 1
    if (rainbowIndex > rainbowLength) {
      rainbowIndex = 0
    }
  }

  if ((keyIsPressed == true) && (keyCode == 46)) {
    clearFunction()
}
}

function mouseDragged() {
  fill(colour)
  noStroke() 
  square(mouseX, mouseY, size)  
}



function clearFunction() {
  let canvas = createCanvas(800, 500);
  
  canvas.parent("mycanvas");
  background(255);
}
  





