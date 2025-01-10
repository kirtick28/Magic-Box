const generateRandom = () => Math.floor(Math.random() * 100) + 1;

let randomNumber = generateRandom();
let attempts = 0;
let currentLevel = 0;

const levels = [
  {
    image: '0.png',
    desc: 'To Find the key',
    out: 'You found the key. Unlock the box.'
  },
  {
    image: '1.png',
    desc: 'To unlock a Box',
    out: 'You have unlocked the box!'
  },
  {
    image: '2.png',
    desc: 'To open the box 50%',
    out: 'You have opened 50% of the Box!'
  },
  {
    image: '3.png',
    desc: 'To open the box 100%',
    out: 'Successfully unlocked and opened the Treasure!'
  }
];

function initializeGame() {
  document.querySelector('img').src = levels[currentLevel].image;
  document.getElementById('desc').textContent = levels[currentLevel].desc;
  document.getElementById('msg').textContent = '';
  randomNumber = generateRandom();
  console.log(randomNumber);
  attempts = 0;
}

document.getElementById('btn').addEventListener('click', function () {
  let guess = parseInt(document.getElementById('guessInput').value);
  attempts++;

  if (guess === randomNumber) {
    display(
      `Correct! ${levels[currentLevel].out} You guessed it in ${attempts} attempts.`
    );

    currentLevel++;

    if (currentLevel < levels.length) {
      setTimeout(() => {
        initializeGame();
      }, 2000);
    } else {
      document.querySelector('img').src = '4.png';
      display(
        'Congratulations! You completed all levels. Restarting the game...'
      );
      currentLevel = 0;
      setTimeout(() => {
        initializeGame();
      }, 3000);
    }
  } else if (guess > randomNumber) {
    display('Too high! Try again.');
  } else {
    display('Too low! Try again.');
  }
});

function display(msg) {
  document.getElementById('msg').textContent = msg;
}

initializeGame();
