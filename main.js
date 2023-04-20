const minNumber = 0;
const maxNumber = 10;
let score = 0;

function generateRandomNumber() {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function checkGuess() {
  const guessInput = document.getElementById('guessInput');
  const guess = Number(guessInput.value);
  const randomNumber = generateRandomNumber();

  if (guess === randomNumber) {
    score++;
    document.getElementById('score').textContent = score;
    document.getElementById('result').textContent = 'You guessed correctly!';
  } else {
    if (score > 0) {
      score--;
      document.getElementById('score').textContent = score;
    }
    if (guess < minNumber || guess > maxNumber) {
      document.getElementById('result').textContent = `Please enter a number between ${minNumber} and ${maxNumber}.`;
    } else {
      document.getElementById('result').textContent = `You guessed ${guess}, but the number was ${randomNumber}.`;
    }
  }

  guessInput.value = '';
}
