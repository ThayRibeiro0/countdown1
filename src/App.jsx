import Title from './components/Title'
import Counter from './components/Counter'

import Cute from './assets/cute.jpg'

import useCountdown from './hooks/useCountdown'



import './App.css'

function App() {
  const [day, hour, minute, second] = useCountdown("December 16, 2023 00:00:00")

  return (
    <div className='App' style={{backgroundImage: `url(${Cute})`}}>
      <div className='container'>
        <Title title="🧔🏼‍♂️❤️👩🏾‍🦱 Mr.& Mrs. Maher"/>
        <Title title="💍 Wedding Day 💒💕"/>
        <div className="countdown-container">
          <Counter title="Days" number={day}/>
          <Counter title="Hours" number={hour}/>
          <Counter title="Minutes" number={minute}/>
          <Counter title="Seconds" number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
