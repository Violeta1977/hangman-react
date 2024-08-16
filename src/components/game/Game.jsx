import Hangman from '../img/hangman.png';
import './Game.css'

export function Game(){
const btn = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function handleLetterClick(){
console.log(`Click ${btn}`);
console.log(btn);


}


function renderBtn(){
    return btn.map((letter,index) => 
    (
        <button className='gameBtn' key={index} onClick={() =>handleLetterClick(letter)}>{letter}</button>
    ))
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
      <div className='gameWord'>WORD</div>
      <div className='gameKeyboard'>
         {renderBtn()}
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