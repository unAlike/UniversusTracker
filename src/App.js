
import { useState } from 'react';
import './App.css';
import HIGH from './High.png'
import MID from './Mid.png'
import BOT from './Low.png'

function App() {
  const [DMG, setDMG] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [p1, setP1] = useState(0);
  const [p2, setP2] = useState(0);
  const [img, setImg] = useState("");

  const addDmg = () => {
    setDMG((prev) => prev + 1);
  }
  const remDmg = () => {
    setDMG((prev) => prev - 1);
  }

  const addSpeed = () => {
    setSpeed((prev) => prev + 1);
  }
  const remSpeed = () => {
    setSpeed((prev) => prev - 1);
  }

  const addP1 = () => {
    setP1((prev) => prev+1);
  }
  const remP1 = () => {
    setP1((prev) => prev-1);
  }
  const addP2 = () => {
    setP2((prev) => prev+1);
  }
  const remP2 = () => {
    setP2((prev) => prev-1);
  }
  const changeSpeed = () => {
    setImg((prev) => {
      if (prev === HIGH) return MID;
      else if(prev === MID) return BOT;
      else return HIGH
    });
  }


  return (
    <div className="AppHeader">
        <div className="topDiv">
          <div className="addHP" onClick={addP1}/>
          <div className="HP">
            {p1}
          </div>
          <div className="remHP" onClick={remP1}/>
        </div>
        <div className="midDiv">
            <div className="minusSpeed"  onClick={remSpeed}>

            </div>
            <div className="Speed" onClick={changeSpeed}>
              <img src={img} alt='' style={{height:"75%"}}></img>
              <div className="speedNum">
                {speed}
              </div>
              
            </div>
            <div className="plusSpeed"  onClick={addSpeed}>

            </div>
            <div className="minusDMG"  onClick={remDmg}>

            </div>
            <div className="DMG align-middle">
              <div className="dmgNum">
                   {DMG}
              </div>
            </div>
            <div className="plusDMG" onClick={addDmg}>

            </div>

          </div>
        <div className="botDiv">
          <div className="addHP" onClick={addP2}/>
          <div className="HP">
            {p2}
          </div>
          <div className="remHP" onClick={remP2}/>
        </div>
    </div>
  );
}




export default App;
