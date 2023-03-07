'use strict'

const score0El = document.querySelector('#score-0');
const score1El = document.querySelector('#score-1');
const current0El = document.getElementById('current-0');
const current1El = document.getElementById('current-1')
const dice = document.querySelector('.dice');
const newBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold')


// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
dice.classList.add('hidden');

const totalScores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
rollBtn.addEventListener('click', () => {
    // 1. Generating a random num on dice roll
    const diceEl = Math.trunc(Math.random() * 6 + 1)
    console.log(diceEl)
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
        document.getElementById(`current-${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
})