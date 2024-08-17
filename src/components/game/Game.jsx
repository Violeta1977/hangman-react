import { useState } from 'react';
import Hangman from '../img/hangman.png';
import './Game.css'
import { WordList } from '../wordsList/WordsList';

export function Game(){
const btn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const maxErrors = 6;

const [word] = useState(WordList);
const [guesses, setGuesses] = useState([]);
const [errors, setErrors] = useState(0);

function displayWord (){
  return word.split('').map(letter =>(guesses.includes(letter) ? letter : '_')).join('');
};

function handleLetterClick (letter){
    if (guesses.includes(letter) || errors >= maxErrors )
        return;
    if (!word.includes(letter)){
        setErrors(errors + 1);
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

function renderButton() {
    return btn.map((letter,index) => 
      (<button className={getButtonClass(letter)} 
               key={index} 
               onClick={() => handleLetterClick(letter)}
               disabled={guesses.includes(letter)} 
      >{letter}</button>))
}

    return (
        <>
  <div className='resultContainer'>
    <p>POINTS</p>
    <p>POINTS</p>
  </div>
  <div className='gameContainer'>
      <img src={Hangman} alt="hangman"/>
    <div className='gameKeyboardContainer'>
      <div className='gameWord'>{displayWord()}</div>
      <div className='gameKeyboard'>
        {renderButton()}
      </div>
      <div className='errorsContainer'>
        <p className='errors'>{errors}/{maxErrors}</p>
        <p className='errorsText'>Nope... It was WORD </p>
        <p className='errorsText'>Yes!!! You are so smart 🤩</p>
        <button className='errorsBtn'>Let`s play again</button>
      </div>
    </div>
  </div>
  </>
  )
}
