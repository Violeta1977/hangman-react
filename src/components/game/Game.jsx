import { useEffect, useState } from 'react';
import hangman0 from '../img/hangman0.png';
import hangman1 from '../img/hangman1.png';
import hangman2 from '../img/hangman2.png';
import hangman3 from '../img/hangman3.png';
import hangman4 from '../img/hangman4.png';
import hangman5 from '../img/hangman5.png';
import hangman6 from '../img/hangman6.png';
import './Game.css'
import { WordList } from '../wordsList/WordsList';

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

useEffect(() => {
  const isWordGuesses = word.split('').every(letter => guesses.includes(letter));
  if(isWordGuesses){
    setWin(prevWin => prevWin + 1);
  }
}, [guesses, word]);

function getButtonClass(letter) {
    if(!guesses.includes(letter))
        return 'gameBtn';
        {
    return word.includes(letter) ? 'gameBtn correct' : 'gameBtn incorrect';
    } 
}

function restartGame() {
  setWord(WordList)
    setGuesses([]);
    setErrors(0);
}

function getCurentImage() {
  return image[errors];
}

const isGameOver = errors >= maxErrors;
const isGameWon = displayWord().split(' ').join('') === word;

function renderButton() {
    return btn.map((letter,index) => 
      (<button className={getButtonClass(letter)} 
               key={index} 
               onClick={() => handleLetterClick(letter)}
               disabled={guesses.includes(letter)|| isGameOver||isGameWon}>{letter}</button>)) 
}

    return (
        <>
  <div className='resultContainer'>
    <p>Win {win}</p>
    <p>Looses</p>
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
        {isGameOver && <p className='errorsText'>Nope... It was {word} </p>}
        {isGameWon && <p className='errorsText'>Yes!!! You are so smart 🤩</p>}
        <button className='restartBtn' onClick={restartGame}>Let`s play again</button>
      </div>
    </div>
  </div>
  </>
  )
}