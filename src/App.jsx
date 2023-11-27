import './App.css';
import { useState } from 'react';
import DiceImg1 from './assets/1.png';
import DiceImg2 from './assets/2.png'
import DiceImg3 from './assets/3.png'
import DiceImg4 from './assets/4.png'
import DiceImg5 from './assets/5.png'
import DiceImg6 from './assets/6.png'



function App() {

  var dicImags = [
    DiceImg1,
    DiceImg2,
    DiceImg3,
    DiceImg4,
    DiceImg5,
    DiceImg6
  ]
  
  const [image, setNewImage] = useState(dicImags[0]);
  const [image2, setNewImage2] = useState(dicImags[1]);

  const rollDice = () => {
    var randomNumber1 = Math.floor(Math.random() * 6)
    var randomNumber2 = Math.floor(Math.random() * 6)

    setNewImage(dicImags[randomNumber1]);
    setNewImage2(dicImags[randomNumber2]);

  }

  return (
    
    <div className = 'App'>
      <center>
        <h2>Welcome to the Dice Game</h2>
        <div className='container'>
          <img className='sqaure' src={image}></img>
          <div style={{width:"5px", display:"inline-block"}}></div>
          <img className='sqaure' src={image2}></img>      
        </div>
        <button type="button" className="btn btn-primary" onClick={rollDice}>Roll Dice</button>
      </center>
    </div>
  )
}

export default App
