import Pomo from './components/Pomodoro';

function App() {

  return (
   <div className='container'> 
    <Pomo pomodoroTime={10}
    shortTime={4}
    longTime={6}
    cycles={4}
    />
  </div>
  )
}

export default App
