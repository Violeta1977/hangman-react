import Hangman from '../img/hangman.png';
import './Game.css'

export function Game(){
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
        <button className='gameBtn'>A</button>
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