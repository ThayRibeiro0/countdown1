import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Counter from './components/Counter';
import Cute from './assets/cute.jpg';
import useCountdown from './hooks/useCountdown';
import './App.css';

function App() {
  const [day, hour, minute, second] = useCountdown("December 16, 2023 00:00:00");
  const [showCongratulations, setShowCongratulations] = useState(false);

  useEffect(() => {
    if (day === 0 && hour === 0 && minute === 0 && second === 0) {
      setShowCongratulations(true);
    }
  }, [day, hour, minute, second]);

  const handleCloseCongratulations = () => {
    setShowCongratulations(false);
  };

  return (
    <div className='App' style={{backgroundImage: `url(${Cute})`}}>
      <div className='container'>
        <Title title="🧔🏼‍♂️❤️👩🏾‍🦱 Mr. & Mrs. Maher"/>
        <Title title="💍 Wedding Day 💒💕"/>
        <div className="countdown-container">
          <Counter title="Days" number={day}/>
          <Counter title="Hours" number={hour}/>
          <Counter title="Minutes" number={minute}/>
          <Counter title="Seconds" number={second}/>
        </div>
      </div>
      {showCongratulations && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={handleCloseCongratulations}>&times;</span>
            <h2 className="modal-title">Congratulations!</h2>
            <p className="modal-message">
              For the date December 16, 2023, I wish you many blessings on this enchanting journey as you build your new lives together. ❤️👩🏾‍❤️‍👨🏼
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
