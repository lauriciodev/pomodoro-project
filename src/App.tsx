import Pomo from './components/Pomodoro';

function App() {

  return (
   <div className='container'> 
    <Pomo pomodoroTime={5}
    shortTime={2}
    longTime={4}
    cycles={4}
    />
  </div>
  )
}

export default App
