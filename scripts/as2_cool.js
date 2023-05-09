
let coolnessScore = 0
let questionNum = -1
let reachedFinal = false
let TitleScreenDB = false
let interval
let debounce = false


function preload() {
  ArchitectsDaughter = loadFont('assets/fonts/ArchitectsDaughter-Regular.ttf');
  FinkHeavy = loadFont('assets/fonts/FinkHeavy Regular.ttf');
  PatrickHand = loadFont('assets/fonts/PatrickHand-Regular.ttf');
}

function setup() {
    let sketch = createCanvas(700, 500);
    sketch.parent("mycanvas");
    background(200, 150, 255);
}

function draw() {
  noStroke()

    if (questionNum === -1) {
    background(200, 150, 255);
    if (TitleScreenDB === false) {
      title1()

      setTimeout(() => {

        TitleScreenDB = true
        
      }, 1000)
      
    } else {

            title2()

      setTimeout(() => {

        TitleScreenDB = false
        
      }, 1000)
    }
  }

    if (questionNum === 0) {
    background(200, 150, 255);
    instructions()
  }

  if (questionNum === 1) {
    background(200, 150, 255);
    question1()
  }

  if (questionNum === 2) {
    background(200, 150, 255);
    question2()
  }

  if (questionNum === 3) {
    background(200, 150, 255);
    question3()
  }

  if (questionNum === 4) {
    background(200, 150, 255);
    question4()
  }

  if (questionNum === 5) {
    background(200, 150, 255);
    question5()
  }

  if (questionNum === 6) {
    background(200, 150, 255);
    question6()
  }

  if (questionNum === 7 && reachedFinal === false) {
    reachedFinal = true
    background(200, 150, 255);
    result()
  }
}

function title1() {
  background(200, 150, 255);

  fill(0)
  
  textFont(FinkHeavy, 30);
  text("Dani's coolness test!!!", 200, 100)

  textFont(PatrickHand, 20);  
  text("Press [Space] to start!", 250, 300)


  
}

function title2() {
  fill(0)
  textFont(FinkHeavy, 30);
  text("Dani's coolness test!!!", 200, 100)
  
  fill(200, 150, 255)
  rect(194, 275, 500,35)
}


function instructions() {
  fill(0)
  textFont(FinkHeavy, 30);
  text("Instructions:", 250, 100)

  textFont(PatrickHand, 20);  
  text("I'll be asking you 6 questions.\nYou'll be ranked how cool you are out of 100\nafter you answer all of them.\n\n[Space] to continue...", 250, 300)
}

function question1() {
  
    textSize(20)
  textFont(FinkHeavy, 30);
  text("QUESTION 1", 200, 100)

    textFont(PatrickHand, 20);  
  text("Which of these foods is the best?\n[Z] for Popcorn   [X] for Pizza   [C] for Burgers", 100, 300)

      textFont(ArchitectsDaughter, 12);  
  text(`Score: ${coolnessScore}`, 620, 450)

}

function question2() {

    textSize(20)
  textFont(FinkHeavy, 30);
  text("QUESTION 2", 200, 100)

    textFont(PatrickHand, 20);  
  text("Pick a Nintendo character.\n[Z] for Mario   [X] for Karate Joe   [C] for Pikachu", 100, 300)

      textFont(ArchitectsDaughter, 12);  
  text(`Score: ${coolnessScore}`, 620, 450)
}

function question3() {
    textSize(20)
  textFont(FinkHeavy, 30);
  text("QUESTION 3", 200, 100)

    textFont(PatrickHand, 20);  
  text("What Nintendo game uses the font that I used for the title?\n[Z] for Animal Crossing  [X] for New Super Mario Bros DS   [C] for Pokemon Red", 100, 300)

      textFont(ArchitectsDaughter, 12);  
  text(`Score: ${coolnessScore}`, 620, 450)
}

function question4() {
    textSize(20)
  textFont(FinkHeavy, 30);
  text("QUESTION 4", 200, 100)

    textFont(PatrickHand, 20);  
  text("Who is the best Animal Crossing special character?\n[Z] for Isabelle  [X] for Tom Nook  [C] for Blathers", 100, 300)

      textFont(ArchitectsDaughter, 12);  
  text(`Score: ${coolnessScore}`, 620, 450)
}

function question5() {
    textSize(20)
  textFont(FinkHeavy, 30);
  text("QUESTION 5", 200, 100)

    textFont(PatrickHand, 20);  
  text('Coolest vocaloid?.\n[Z] for Miku  [X] for vFlower\n[C] for Gumi  [V] for "what the heck is a vocaloid"', 100, 300)

      textFont(ArchitectsDaughter, 12);  
  text(`Score: ${coolnessScore}`, 620, 450)
}

function question6() {
    textSize(20)
  textFont(FinkHeavy, 30);
  text("QUESTION 6", 200, 100)

    textFont(PatrickHand, 20);  
  text("What topping should NOT be on pizza?.\n[Z] for mushrooms   [X] for chicken\n[C] for anchovies  [V] for pineapple  ", 100, 300)

      textFont(ArchitectsDaughter, 12);  
  text(`Score: ${coolnessScore}`, 620, 450)
}

function result() {
    textSize(22)
  textFont(FinkHeavy, 30);
  text("CALCULATING SCORE...", 200, 100)
  const finalScore = coolnessScore
  
setTimeout(() => {
      textFont(PatrickHand, 24);  
  textSize(24) 
  text("Your final score is...", 50, 150)
  setTimeout(() => {
    textSize(30) 
    text(`${finalScore}!`, 260, 150)
      setTimeout(() => {
    textSize(24) 
    text(`Your rank is...`, 50, 200)

          setTimeout(() => {
          textSize(32) 
          let message = ""

                    if (finalScore < 25) {
            message = "DIRT"
          } else if (finalScore >= 25 && finalScore < 50) {
            message = "WOOD"
          }
          else if (finalScore >= 50 && finalScore < 75) {
            message = "IRON"
          }
  else if (finalScore >= 75) {
            message = "DIAMOND"
          }       
              textFont(PatrickHand, 30);  
            text(message, 200, 200)

            setTimeout(() => {
              text("Thanks for playing!\nPress [Space] to test again!", 300, 300)
            }, 2000)
  }, 2000)
  },2000)
  },2000)
  
      

     
  }, 2000)


               textFont(PatrickHand, 30);  
            

  
}



function keyPressed() {
  console.log(key)

  if (questionNum === -1 && key == ' ')  {

    questionNum = 0
    
  }

 else if (questionNum === 0 && key == ' ')  {

    questionNum = 1
    
  }  
 else if (questionNum === 1 && key == 'z')  {
    coolnessScore += 15
    questionNum = 2
    
  }  
   else if (questionNum === 1 && key == 'x')  {
    coolnessScore += 5
    questionNum = 2
    
  }   

   else if (questionNum === 1 && key == 'c')  {
    coolnessScore += 10
    questionNum = 2
    
  }  

   else if (questionNum === 2 && key == 'z')  {
    coolnessScore += -5
    questionNum = 3
    
  }  
   else if (questionNum === 2 && key == 'x')  {
    coolnessScore += 17
    questionNum = 3
    
  }   

   else if (questionNum === 2 && key == 'c')  {
    coolnessScore += 3
    questionNum = 3
    
  }  

     else if (questionNum === 3 && key == 'z')  {
    coolnessScore += 15
    questionNum = 4
    
  }  
   else if (questionNum === 3 && key == 'x')  {
    coolnessScore += -7
    questionNum = 4
    
  }   

   else if (questionNum === 3 && key == 'c')  {
    coolnessScore += -10
    questionNum = 4
    
  }  

       else if (questionNum === 4 && key == 'z')  {
    coolnessScore += -5
    questionNum = 5
    
  }  
   else if (questionNum === 4 && key == 'x')  {
    coolnessScore += 23
    questionNum = 5
    
  }   

   else if (questionNum === 4 && key == 'c')  {
    coolnessScore += 12
      questionNum = 5
    
  }  

       else if (questionNum === 5 && key == 'z')  {
    coolnessScore += -7
    questionNum = 6
    
  }  
   else if (questionNum === 5 && key == 'x')  {
    coolnessScore += 25
    questionNum = 6
    
  }   

   else if (questionNum === 5 && key == 'c')  {
    coolnessScore += 6
      questionNum = 6
    
  }  

     else if (questionNum === 5 && key == 'v')  {
    coolnessScore += 0
      questionNum = 6
    
  }     



         else if (questionNum === 6 && key == 'z')  {
    coolnessScore += 0
    questionNum = 7
    
  }  
   else if (questionNum === 6 && key == 'x')  {
    coolnessScore += -3
    questionNum = 7
    
  }   

   else if (questionNum === 6 && key == 'c')  {
    coolnessScore += 16
      questionNum = 7
    
  }  

     else if (questionNum === 6  && key == 'v')  {
    coolnessScore += -20
      questionNum = 7
    
  }   

       else if (questionNum === 7  && key == ' ')  {
    coolnessScore = 0
      questionNum = -1
          reachedFinal = false
 TitleScreenDB = false

 debounce = false
    
  }   
}

function mousePressed() {
 console.log(mouseX, mouseY)
}


