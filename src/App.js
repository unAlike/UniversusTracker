
import { useState } from 'react';
import './App.css';



function App() {
  const [DMG, setDMG] = useState(0);
  const [speed, setSpeed] = useState(0);

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



  return (
    <div className="AppHeader">
        <div className="topDiv">
        
        </div>
        <div className="midDiv">
            <div className="minusSpeed"  onClick={remSpeed}>

            </div>
            <div className="Speed">
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

        </div>
    </div>
  );
}




export default App;
