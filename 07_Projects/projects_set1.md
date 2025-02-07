# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution code

## project 1

``` javascript

console.log("Roshan");

const buttons=document.querySelectorAll('.button')

const body=document.querySelector('body')

buttons.forEach(function(button) {

  button.addEventListener('click', function(event) {

    if (event.target.id==='grey') {

      body.style.backgroundColor="grey";
    }
    if (event.target.id==='white') {

      body.style.backgroundColor="white";
    }
    if (event.target.id==='blue') {

      body.style.backgroundColor="blue";
    }
    if (event.target.id==='yellow') {

      body.style.backgroundColor="yellow";
    }
    if (event.target.id==='violet') {

      body.style.backgroundColor="violet";
    }
  });
});


```

## project 2 solution

``` javascript
const form=document.querySelector('form')

form.addEventListener('submit', function(event) {

  event.preventDefault()

  const ht=parseInt(document.querySelector('#height').value)

  const wt=parseInt(document.querySelector('#weight').value)

  const result=document.querySelector('#results')

  if (ht==='' || ht<0 || isNaN(ht)) {

    result.innerHTML="Please give a valid height"
  }
  else if (wt==='' || wt<0 || isNaN(wt)) {

    result.innerHTML="Please give a valid weight"
  }
  else {

    const BMI=(wt/((ht*ht)/10000)).toFixed(2);
    result.innerHTML=`BMI: ${BMI}`;
  }
});

```

## project 3 solution code

``` javascript

const clock=document.querySelector('#clock')



setInterval(function() {

  let date=new Date();

  clock.innerHTML=date.toLocaleTimeString();
}, 1000)

```

## project 4 solution code
``` javascript

let ans = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const msg = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let guessCount = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function(e) {
    const guess = parseInt(userInput.value);
    e.preventDefault();
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);

    if (guessCount === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${ans}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === ans) {
    displayMessage(`You guessed it right!`);
  } else if (guess < ans) {
    displayMessage(`Guessed number is too low`);
  } else if (guess > ans) {
    displayMessage(`Guessed number is too high`);
  }
}

function displayGuess(guess) {
  guessSlot.innerHTML = guessSlot.innerHTML + `${guess}, `;
  guessCount++;
  remaining.innerHTML = `:  ${11 - guessCount}`;
}

function displayMessage(message) {
  if (msg) {
    msg.innerHTML = `<h2>${message}</h2>`;
  } else {
    console.warn("Message element not found. Make sure the HTML contains an element with the class 'lowOrHigh'.");
  }
}

function endGame() {
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;

  startOver.appendChild(p);
  playGame = false;

  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');

  newGameButton.addEventListener('click', function(event) {
    ans = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    guessCount = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - guessCount}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```