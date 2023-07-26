let randomNumber = parseInt((Math.random()*100 +1));

const submit = document.getElementById("subt");

const userInput = document.querySelector('#guessField');

const previousGuessNumber = document.querySelector('.guesses');

const guessRemainingChance = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('.lowOrHi')

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let numGuess = 1;

let previousGuess = [];

let playGame = true;

if(playGame){
  submit.addEventListener("click", function(e){
    e.preventDefault();
    
    const guess = parseInt(userInput.value);
    // validate function call
    validateGuess(guess);

  });
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a valid Number')
  } else if (guess<1){
    alert('Please enter a number in range 1 to 100')
  }else if (guess>100){
    alert('Plese enter a number less then 100')
  }else{
    previousGuess.push(guess);
    if(numGuess===11){
      //display guess 
      cleanUpGuess(guess);
      // display message

      displayMessage(`Game over, Random number was ${randomNumber}`);
      
      //guess reamaining 
      guessRemainingChance.innerHTML = 0;
      // end the Game 

      endGame()

    }else{
      cleanUpGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage('You win!, you guessed it right');
    //end the game
    endGame();
  }else if(guess< randomNumber){
    displayMessage('your guess number is too low');
  }
  else if(guess > randomNumber){
    displayMessage('your guess number is too high');
  }
}

function cleanUpGuess(guess){
  userInput.value = '';

  previousGuessNumber.innerHTML += `${guess}, `;

  guessRemainingChance.innerHTML = `${10-numGuess}`;

  numGuess++;

}

function displayMessage(message){
  lowOrHi.innerHTML = `<h3 style="color: yellow">${message}</3>`;
}


function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">New Game</h2>`;
  // new game button append
  startOver.appendChild(p);
  playGame = false;
  // new game call
  newGame()

}

function newGame(){
  const newGame = document.querySelector('#newGame');
  newGame.style.cursor = "pointer";
  newGame.addEventListener('click', function(e){
    displayMessage(`New Game has been started Start`);
    randomNumber =  parseInt((Math.random()*100 +1));
    numGuess = 1;

    previousGuess = [];

    previousGuessNumber.innerHTML = ''

    guessRemainingChance.innerHTML = `${11-numGuess}`;

    userInput.removeAttribute('disabled');

    startOver.removeChild(p);

    playGame = true;

  })
}

