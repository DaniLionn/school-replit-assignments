let die1, die2, die3, die4, die5, die6;
let result;

let colours = ["#a2ff00", "#00a2ff", "#ff00a2"];

let plrDieValue = 0;
let cpuDieValue = 0;
let yourWalletVariable = 0;
let CPUWallet = 0;
let i = 0;
let baseMoney = 15000;
let betTotal = 0;
let betAmount = 100;
let maxroll = 450;

let rollLock = false;
let finished = false;

let instructions = `Hit the [Z] key to bet ${"$"}${betAmount} and roll the dice.\nTie = ${"$"}${betAmount}, Win = ${"$"}${Math.floor(betAmount * 2)}, Lose = -${"$"}${Math.floor(betAmount * 2)}.\nUse the arrow keys to change your bet amount.\nYou can't bet any higher than the money you have.`;



function preload() {
  soundFormats('mp3');
  
  //Images
  die1 = loadImage("assets/images/dice/1.jpg");
  die2 = loadImage("assets/images/dice/2.jpg");
  die3 = loadImage("assets/images/dice/3.jpg");
  die4 = loadImage("assets/images/dice/4.jpg");
  die5 = loadImage("assets/images/dice/5.jpg");
  die6 = loadImage("assets/images/dice/6.jpg");

  //Sounds
  win = loadSound('assets/sounds/dicegame/win');
  lose = loadSound('assets/sounds/dicegame/lose');
  rollSound = loadSound('assets/sounds/dicegame/roll');

  //Fonts
  ArchitectsDaughter = loadFont('assets/fonts/ArchitectsDaughter-Regular.ttf');
  FinkHeavy = loadFont('assets/fonts/FinkHeavy Regular.ttf');
  PatrickHand = loadFont('assets/fonts/PatrickHand-Regular.ttf');
} //end preloading of assets/images

function setup() {

  yourWalletVariable = localStorage.getItem('savedWallet');
  CPUWallet = localStorage.getItem('cpuSavedWallet');
  
  if(yourWalletVariable <= 0){
    yourWalletVariable = baseMoney;
  }  
  
  if(CPUWallet <= 0){
    CPUWallet = baseMoney;
  }  

  let sketch = createCanvas(600, 800);
  sketch.parent("mycanvas");
  background(200, 15, 150);
  
  // ************  Instructions Area  ************
  noStroke();
  fill(colours[1]);
  rect(0, 0, width, 200);

  // ************  Dice Area  ************
  noStroke();
  fill(colours[2]);
  rect(0, 200, width, 400);

  //  ************  Winners Area  ************
  noStroke();
  fill(colours[0]);
  rect(0, 600, width, 200);

} //end setup


function check(num1, num2) {
print(num1, num2)
    if (num1 > num2) {
        if (CPUWallet > 0) {
            yourWalletVariable += betTotal
            CPUWallet -= betTotal
        }
      win.play();
      saveWallet()
        return "win"
    } else if (num1 < num2) {
        if (yourWalletVariable > 0) {
            yourWalletVariable -= betTotal
            CPUWallet += betTotal
        }
      lose.play();
       saveWallet()
        return "lose"
    } else if (num1 = num2) {
        yourWalletVariable = yourWalletVariable + Math.floor(betTotal / 2)
        CPUWallet = yourWalletVariable + Math.floor(betTotal / 2)
       saveWallet()
        return "tie"
    }

}


function roll() {

    //found this delay loop code at https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop


    setTimeout(function() {
        plrDieValue = 1 + (Math.floor(Math.random() * 6))
        cpuDieValue = 1 + (Math.floor(Math.random() * 6))


        i++;
        if (i != maxroll) {
            roll();
        }

        if (i >= maxroll) {
            result = check(plrDieValue, cpuDieValue)

            print(result)
            rollLock = false
        }
    }, 25)


}




function draw() {
    noStroke();
    fill(colours[1]);
    rect(0, 0, width, 200);
    stroke(0);
    fill(colours[0]);
    textFont(FinkHeavy, 50)
    text("Hideous Colours Casino", 10, 50)
    fill(colours[2]);
    textFont(PatrickHand, 20)
    text(instructions, 10, 70)
   textFont(PatrickHand, 30)
    text(`Wallet:  ${"$"}${yourWalletVariable}`, 10, 180)
    text(`CPU Wallet:  ${"$"}${CPUWallet}`, 360, 180)
    fill(255)
    square(50, 300, 200)

    fill(colours[0]);
    textFont(ArchitectsDaughter, 20)
    text("You", 50, 315)

    fill(255)
    square(350, 300, 200)

    fill(colours[0]);
    textFont(ArchitectsDaughter, 20)
    text("CPU", 350, 315)

    if (plrDieValue == 1) {

        image(die1, 73, 344, 150, 150)

    } else if (plrDieValue == 2) {
        image(die2, 73, 344, 150, 150)
    } else if (plrDieValue == 3) {
        image(die3, 73, 344, 150, 150)
    } else if (plrDieValue == 4) {
        image(die4, 73, 344, 150, 150)
    } else if (plrDieValue == 5) {
        image(die5, 73, 344, 150, 150)
    } else if (plrDieValue == 6) {
        image(die6, 73, 344, 150, 150)
    }

    if (cpuDieValue == 1) {

        image(die1, 373, 344, 150, 150)

    }  if (cpuDieValue == 2) {
        image(die2, 373, 344, 150, 150)
    }  if (plrDieValue == 3) {
        image(die3, 373, 344, 150, 150)
    }  if (cpuDieValue == 4) {
        image(die4, 373, 344, 150, 150)
    }  if (cpuDieValue == 5) {
        image(die5, 373, 344, 150, 150)
    }  if (cpuDieValue == 6) {
        image(die6, 373, 344, 150, 150)
    }


  if (yourWalletVariable  < 0) {
    yourWalletVariable = 0
  }

    if (CPUWallet  < 0) {
    CPUWallet = 0
  }

  if (cpuDieValue === 0 && yourWalletVariable === 0) {
    yourWalletVariable = Math.ceil(baseMoney / 2)
    cpuDieValue = Math.ceil(baseMoney / 2)
  }

  if (betAmount > yourWalletVariable) {
      betAmount = yourWalletVariable 
    }

    if (betAmount < 50) {
     betAmount = 50
    }


  
    if (result != undefined) {

          if (cpuDieValue == 1) {

        image(die1, 373, 344, 150, 150)

    }  if (cpuDieValue == 2) {
        image(die2, 373, 344, 150, 150)
    }  if (plrDieValue == 3) {
        image(die3, 373, 344, 150, 150)
    }  if (cpuDieValue == 4) {
        image(die4, 373, 344, 150, 150)
    }  if (cpuDieValue == 5) {
        image(die5, 373, 344, 150, 150)
    }  if (cpuDieValue == 6) {
        image(die6, 373, 344, 150, 150)
    }

        // print("hi")
        if (result == "win") {
            //print("win!")
            noStroke()
            fill(colours[0])
            rect(9, 633, 399, 687)
            stroke(0)
            fill(colours[1]);
            textFont(PatrickHand, 60)
            text(`You win! +${"$"}${betTotal}`, 22, 681)
          
            // print("bye")
        } else if (result == "lose") {
            //print("lose")
            noStroke()
            fill(colours[0])
            rect(9, 633, 399, 687)
            stroke(0)
            fill(colours[1]);
            textFont(PatrickHand, 60)
            text(`You lose... -${"$"}${betTotal}`, 22, 681)
          
            //print("orange")
        } else if (result == "tie") {
            print("tie!")
            noStroke()
            fill(colours[0])

            rect(9, 633, 399, 687)
            stroke(0)
            fill(colours[1]);
            textFont(PatrickHand, 60)
            text(`Tie... +${"$"}${betTotal / 2}`, 22, 681)
         
            //print("banana")
        }
    } else {
    noStroke()
    fill(colours[0])
    rect(9, 633, 399, 687)
    }

} //end draw

function updateInstructions(betAmount) {
  
  instructions = `Hit the [Z] key to bet ${"$"}${betAmount} and roll the dice.\nTie = ${"$"}${betAmount}, Win = ${"$"}${Math.floor(betAmount * 2)}, Lose = -${"$"}${Math.floor(betAmount * 2)}.\nUse the arrow keys to change your bet amount.\nYou can't bet any higher than the money you have.`;
  
}

function keyPressed() {
   // print(key)
  
  if (key === "z") {

    if (rollLock === false) {
      rollLock = true
      betTotal = 0
      result = undefined
       i = 0
      
      if (yourWalletVariable > 0) {
        yourWalletVariable -= betAmount
        betTotal += betAmount
      } else {
        updateInstructions(Math.floor(betAmount / 2))
      }
            
      if (CPUWallet > 0) {
        CPUWallet -= betAmount
        betTotal += betAmount
      } else {
        updateInstructions(Math.floor(betAmount / 2))
      }
      
        rollSound.play()
        roll()


        } else {
          print("no")
        }

    }

  if (key === "ArrowUp" || key === "ArrowRight") {
    betAmount += 50
  if (betAmount > yourWalletVariable) {
        betAmount = yourWalletVariable 
    }

    updateInstructions(betAmount)
  }

    if (key === "ArrowDown" || key === "ArrowLeft") {
    betAmount -= 50
            if (betAmount < 50) {
     betAmount = 50
    }
updateInstructions(betAmount)
  }
}

function mousePressed() {
    //print(mouseX, mouseY)
}

function saveWallet() {
    localStorage.setItem('savedWallet', yourWalletVariable);
  localStorage.setItem('cpuSavedWallet', CPUWallet);
}