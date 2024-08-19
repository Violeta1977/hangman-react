import './Game.css'
import { useEffect, useState } from 'react';
import { WordList } from '../wordsList/WordsList';
import hangman0 from '../img/hangman0.png';
import hangman1 from '../img/hangman1.png';
import hangman2 from '../img/hangman2.png';
import hangman3 from '../img/hangman3.png';
import hangman4 from '../img/hangman4.png';
import hangman5 from '../img/hangman5.png';
import hangman6 from '../img/hangman6.png';

export function Game(){
const btn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const maxErrors = 6;
const image = [
  hangman0,
  hangman1,
  hangman2,
  hangman3,
  hangman4,
  hangman5,
  hangman6,
];

const [word, setWord] = useState(WordList());
const [guesses, setGuesses] = useState([]);
const [errors, setErrors] = useState(0);
const [win, setWin] = useState(0);
const [loss, setLoss] =useState(0);

useEffect(() => {
  function handleKeyup(e) {
    const letter =  e.key.toUpperCase();
      //  grazina true arba false
      if (isGameLoss || isGameWon) {
        console.log(isGameLoss);
        console.log(isGameWon);
        // patikrinimas ar nuspausta klavisa yra enter
            if (e.key === 'Enter'){
              console.log('enter pressed, restarting game...');
              restartGame();
            }
            return;
      }
      // patikrinimas ar nuspausta klavisa yra raide
      if (letter.length === 1 && letter >= 'A' && letter <= 'Z') {
        handleLetterClick(letter);
      }
  };
  
    window.addEventListener('keyup', handleKeyup);

  return () => {
    window.removeEventListener('keyup', handleKeyup);
  }
});

useEffect(() => {
  const isWordGuesses = word.split('').every(letter => guesses.includes(letter));
     if(isWordGuesses){
       setWin(prevWin => prevWin + 1);
   } else if(errors >= maxErrors){
       setLoss(prevLoss => prevLoss + 1); 
  }
}, [guesses, word, errors]);


function displayWord (){
  return word.split('').map(letter =>(guesses.includes(letter) ? letter : '_')).join('');
};

function handleLetterClick (letter){
    if (guesses.includes(letter) || errors >= maxErrors )
      return;
    if (!word.includes(letter)){
        setErrors(prevErrors => prevErrors +1);
     }
     setGuesses([...guesses,letter]);
}

function getButtonClass(letter) {
    if(!guesses.includes(letter))
        return 'gameBtn';
        {
    return word.includes(letter) ? 'gameBtn correct' : 'gameBtn incorrect';
    } 
}

function restartGame() {
   console.log('game is restarting...');
  
    setWord(WordList)
    setGuesses([]);
    setErrors(0);
}

function getCurentImage() {
  return image[errors];
}

const isGameLoss = errors >= maxErrors;
const isGameWon = displayWord().split(' ').join('') === word;

function renderButton() {
    return btn.map((letter,index) => 
      (<button className={getButtonClass(letter)} 
               key={index} 
               onClick={() => handleLetterClick(letter)}
               disabled={guesses.includes(letter)|| isGameLoss||isGameWon}>{letter}</button>)) 
}

function renderResultMessage(){
  if (isGameLoss){
    return <p className='errorsText'>Nope... It was {word} </p>
  } else if (isGameWon){
    return <p className='errorsText'>Yes!!! You are so smart 🤩</p>
  };
  return null;
}

function renderRestartBtn() {
  if (isGameLoss || isGameWon){
    return <button className='restartBtn' 
    onClick={restartGame}>Let`s play again</button>;
  }
  return null;
}

    return (
 <>
  <div className='resultContainer'>
    <p>Good job! <span className='result'>{win}</span></p>
    <p>Mayby next time. <span className='result'>{loss}</span></p>
  </div>
  <div className='gameContainer'>
      <img src={getCurentImage()} alt="hangman"/>
    <div className='gameKeyboardContainer'>
      <div className='gameWord'>{displayWord()}</div>
      <div className='gameKeyboard'>
        {renderButton()}
      </div>
      <div className='errorsContainer'>
        <p className='errors'>{errors}/{maxErrors}</p>
        {renderResultMessage()}
        {renderRestartBtn()}
      </div>
    </div>
  </div>
</>
  )
}