const word = document.getElementById('word');
const wrongLetters = document.getElementById('wrong-letters');

const words = ['hello', 'goodbye'];
const correctLetters = [];
const inCorrectLetters = [];

const selectedWord = words[Math.floor(Math.random() * words.length)];

console.log(selectedWord);

function displayWord() {
  word.innerHTML = selectedWord
    .split('')
    .map(letter => {
      return correctLetters.includes(letter)
        ? `<span class ='letter'>${letter}</span>`
        : '-';
    })
    .join('');
}

function displayWrong() {
  wrongLetters.innerHTML = inCorrectLetters.map(letter => {
    return `<span>${letter}</span> `;
  });
}

function winCondition() {
  // Needs changing
  if (splitWord === selectedWord) {
    console.log('You have won!');
  }
}

function loseCondition() {
  if (inCorrectLetters.length > 5) {
    console.log('You lose');
  }
}

window.addEventListener('keydown', e => {
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    if (selectedWord.includes(e.key)) {
      if (!correctLetters.includes(e.key)) {
        correctLetters.push(e.key);
      }

      console.log(correctLetters);
      displayWord();
      winCondition();
    } else {
      if (!inCorrectLetters.includes(e.key)) {
        inCorrectLetters.push(e.key);
        displayWrong();
        loseCondition();
      }
    }
  } else {
    console.log('a-z only');
  }
  console.log(correctLetters, inCorrectLetters);
});

displayWord();
