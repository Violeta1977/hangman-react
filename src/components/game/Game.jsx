import Hangman from '../img/hangman.png';

export function Game(){
    return (
        <>
    <div>
    <p>POINTS</p>
    <p>POINTS</p>
  </div>
  <div>
    <div>
      <img src={Hangman} alt="hangman"/>
    </div>
    <div>
      <div>WORD</div>
      <div>
        <button>ABC</button>
      </div>
      <div>
        <p>YES</p>
        <p>NO</p>
        <button>AGAIN</button>
      </div>
    </div>
  </div>
  </>
  )
}