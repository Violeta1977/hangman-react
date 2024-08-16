import { useState } from 'react';
import Hangman from '../img/hangman.png';
import './Game.css'

export function Game(){
const btn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const words = ['BEAR', 'HIPPO', 'deer', 'monkey']
const [word] = useState(words[Math.floor(Math.random() * words.length)]);
const [guesses, setGuesses] = useState([]);

function displayWord (){
  return word.split('').map(letter =>(guesses.includes(letter) ? letter : '_')).join('');
    

   
};

function handleLetterClick (letter){
    if (guesses.includes(letter) )
        return;
    
        setGuesses([...guesses,letter]);

        if (!guesses.includes(letter) === word)
        setGuesses(guesses + 1);


}


const renderButton = () => {
    return btn.map((letter,index) => (<button className='gameBtn' key={index} onClick={() => handleLetterClick(letter)}>{letter}</button>))
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
        <p className='errors'>0/6</p>
        <p className='errorsText'>Nope... It was WORD </p>
        <p className='errorsText'>Yes!!! You are so smart 🤩</p>
        <button className='errorsBtn'>Let`s play again</button>
      </div>
    </div>
  </div>
  </>
  )
}
