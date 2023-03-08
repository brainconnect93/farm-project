'use strict'


const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const score0El = document.querySelector('#score-0');
const score1El = document.querySelector('#score-1');
const current0El = document.getElementById('current-0');
const current1El = document.getElementById('current-1')
const dice = document.querySelector('.dice');
const newBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold')


// Starting Condition
let totalScores, currentScore, activePlayer, playing;

const init = function(){
  totalScores = [0, 0]
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0

  dice.classList.add('hidden');
  player0El.classList.remove('player-winner')
  player1El.classList.remove('player-winner')
  player0El.classList.add('player-active')
  player1El.classList.remove('player-active')
};
init();

const switchPlayer = function() {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player-active')
  player1El.classList.toggle('player-active')
}

// Rolling dice functionality
rollBtn.addEventListener('click', () => {
  if (playing) {
    // 1. Generating a random num on dice roll
    const diceEl = Math.trunc(Math.random() * 6 + 1)
    // 2. Display dice 
    dice.classList.remove('hidden');
    dice.src = `./img/dice${diceEl}.png`

    // 3. Check for rolled 1
    if (diceEl !== 1) {
        // Add the score
        currentScore += diceEl
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        // current0El.textContent = currentScore // Change Later
    }else {
        // Switch to next player
        switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (playing) {
    // Add current score to active player's score
    totalScores[activePlayer] += currentScore
    // totalScores[i] = totalScores[i] + currentScore
    document.getElementById(`score-${activePlayer}`).textContent = totalScores[activePlayer];

    // check if player's score >= 100
    if (totalScores[activePlayer] >= 100) {
        playing = false;
        dice.classList.add('hidden');
        // finish the game
      document.querySelector(`.player-${activePlayer}`).classList.add('player-winner');
      document.querySelector(`.player-${activePlayer}`).classList.remove('player-active');
    }else {
        // switch to the next player
        switchPlayer();
    }
  }
});

newBtn.addEventListener('click', init)